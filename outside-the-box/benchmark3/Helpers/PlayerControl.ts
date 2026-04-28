import { EventListener } from "./Events/EventListener";
import { EventEmitter } from "./Events/EventEmitter";
import { GameEvent, MoveEventPayload } from "./Events/Event.ts";
import { Block } from "./objects/Block";
import type { AnswerSlotEntity } from "../types";
import type { SoundManager } from "../audio";

type Direction = "up" | "down" | "left" | "right";

type Bounds = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};

type Afterimage = {
    x: number;
    y: number;
    alpha: number;
};

export class PlayerControl extends EventListener {
    public x = 0;
    public y = 0;
    public readonly width = 48;
    public readonly height = 48;

    private readonly speed = 5;
    private readonly dashDistance = 56;
    private direction: Direction = "down";
    private readonly sprites: Record<Direction, HTMLImageElement>;
    private bounds: Bounds = {
        minX: 0,
        maxX: Number.POSITIVE_INFINITY,
        minY: 0,
        maxY: Number.POSITIVE_INFINITY,
    };
    private blocks: Block[] = [];
    private answerSlots: AnswerSlotEntity[] = [];
    private heldBlock: Block | null = null;
    private afterimages: Afterimage[] = [];
    private soundManager: SoundManager | null = null;

    constructor(emitter: EventEmitter) {
        super(emitter);

        this.sprites = {
            up: this.loadSprite("./assets/Player/Player_Up.png"),
            down: this.loadSprite("./assets/Player/Player_Down.png"),
            left: this.loadSprite("./assets/Player/Player_Left.png"),
            right: this.loadSprite("./assets/Player/Player_Right.png"),
        };

        this.x = 400;
        this.y = 300;

        this.listen<MoveEventPayload>(GameEvent.MOVE, (data) => {
            this.move(data);
        });

        this.listen(GameEvent.DASH, () => {
            this.dash();
        });

        this.listen(GameEvent.HOLD, () => {
            this.toggleHold();
        });
    }

    public update() {
        if (this.heldBlock?.destroyed) {
            this.detachHeldBlock();
        }

        this.afterimages = this.afterimages
            .map((image) => ({ ...image, alpha: image.alpha - 0.12 }))
            .filter((image) => image.alpha > 0);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const sprite = this.sprites[this.direction];

        if (sprite.complete && sprite.naturalWidth > 0) {
            for (const image of this.afterimages) {
                ctx.save();
                ctx.globalAlpha = image.alpha;
                ctx.drawImage(sprite, image.x, image.y, this.width, this.height);
                ctx.restore();
            }

            ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
            return;
        }

        for (const image of this.afterimages) {
            ctx.save();
            ctx.globalAlpha = image.alpha;
            ctx.fillStyle = "#f28b82";
            ctx.fillRect(image.x, image.y, this.width, this.height);
            ctx.restore();
        }

        ctx.fillStyle = "#e53935";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    public setBounds(minX: number, minY: number, maxX: number, maxY: number) {
        this.bounds = { minX, minY, maxX, maxY };
        this.clampToBounds();
    }

    public setBlocks(blocks: Block[]) {
        this.blocks = blocks;

        if (this.heldBlock && !blocks.includes(this.heldBlock)) {
            this.heldBlock = null;
        }
    }

    public setAnswerSlots(slots: AnswerSlotEntity[]) {
        this.answerSlots = slots;
    }

    public setSoundManager(soundManager: SoundManager) {
        this.soundManager = soundManager;
    }

    public resetPosition(x: number, y: number, direction: Direction = "down") {
        if (this.heldBlock) {
            this.detachHeldBlock();
        }

        this.x = x;
        this.y = y;
        this.direction = direction;
        this.afterimages = [];
        this.clampToBounds();
    }

    public getFacingDirection() {
        return this.direction;
    }

    private loadSprite(src: string) {
        const sprite = new Image();
        sprite.src = src;
        return sprite;
    }

    private move(data: MoveEventPayload) {
        const nextDirection = this.resolveDirection(data);
        this.direction = nextDirection;
        const speedMultiplier = this.heldBlock?.getMoveSpeedMultiplier() ?? 1;
        const moveSpeed = this.speed * speedMultiplier;

        const candidateX = this.clampValue(this.x + data.dx * moveSpeed, this.bounds.minX, this.bounds.maxX);
        const candidateY = this.clampValue(this.y + data.dy * moveSpeed, this.bounds.minY, this.bounds.maxY);
        const otherBlocks = this.blocks.filter((block) => block !== this.heldBlock);

        if (this.collidesWithBlockingBlock(candidateX, candidateY, otherBlocks)) {
            return;
        }

        if (this.heldBlock) {
            this.clearAnswerSlotForBlock(this.heldBlock);
            const heldPosition = this.getHeldBlockPosition(candidateX, candidateY, nextDirection);
            this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
        }

        this.x = candidateX;
        this.y = candidateY;
    }

    private dash() {
        let dx = 0;
        let dy = 0;

        if (this.direction === "up") dy = -1;
        if (this.direction === "down") dy = 1;
        if (this.direction === "left") dx = -1;
        if (this.direction === "right") dx = 1;
        const speedMultiplier = this.heldBlock?.getMoveSpeedMultiplier() ?? 1;
        const dashDistance = this.dashDistance * speedMultiplier;

        const startX = this.x;
        const startY = this.y;
        const candidateX = this.clampValue(this.x + dx * dashDistance, this.bounds.minX, this.bounds.maxX);
        const candidateY = this.clampValue(this.y + dy * dashDistance, this.bounds.minY, this.bounds.maxY);
        const otherBlocks = this.blocks.filter((block) => block !== this.heldBlock);

        if (this.collidesWithBlockingBlock(candidateX, candidateY, otherBlocks)) {
            return;
        }

        if (this.heldBlock) {
            this.clearAnswerSlotForBlock(this.heldBlock);
            const heldPosition = this.getHeldBlockPosition(candidateX, candidateY, this.direction);
            this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
        }

        this.spawnDashAfterimages(startX, startY, dx, dy);
        this.x = candidateX;
        this.y = candidateY;
        this.soundManager?.play("dash", { volume: 0.45 });
    }

    private toggleHold() {
        if (this.heldBlock) {
            const releaseSlot = this.getIntersectingEmptyAnswerSlot(this.heldBlock);
            const otherBlocks = this.blocks.filter((candidate) => candidate !== this.heldBlock);

            if (releaseSlot) {
                this.clearAnswerSlotForBlock(this.heldBlock);
                releaseSlot.block = this.heldBlock;
                this.heldBlock.moveTo(releaseSlot.x, releaseSlot.y);
                this.heldBlock.onReleased();
                this.detachHeldBlock();
                return;
            }

            if (this.collidesWithAnyBlock(this.heldBlock.x, this.heldBlock.y, otherBlocks)) {
                return;
            }

            if (!this.rectFitsBounds(this.heldBlock.x, this.heldBlock.y, this.heldBlock.size, this.heldBlock.size)) {
                return;
            }

            this.heldBlock.onReleased();
            this.detachHeldBlock();
            return;
        }

        const block = this.findNearbyFacingBlock();
        if (!block || !block.canBePickedUp()) {
            return;
        }

        this.clearAnswerSlotForBlock(block);
        if (!block.onPickedUp()) {
            return;
        }
        this.heldBlock = block;
        block.setHeld(true);
        const heldPosition = this.getHeldBlockPosition(this.x, this.y, this.direction);
        block.moveTo(heldPosition.x, heldPosition.y);
    }

    private findNearbyFacingBlock() {
        const threshold = this.width / 2;
        const playerCenterX = this.x + this.width / 2;
        const playerCenterY = this.y + this.height / 2;

        let closestBlock: Block | null = null;
        let closestDistance = Number.POSITIVE_INFINITY;

        for (const block of this.blocks) {
            if (block.held) {
                continue;
            }

            if (block.destroyed) {
                continue;
            }

            const blockCenterX = block.x + block.size / 2;
            const blockCenterY = block.y + block.size / 2;
            const horizontalDistance = Math.abs(blockCenterX - playerCenterX);
            const verticalDistance = Math.abs(blockCenterY - playerCenterY);

            let distance = Number.POSITIVE_INFINITY;

            if (this.direction === "down" && block.y >= this.y) {
                const edgeGap = block.y - (this.y + this.height);
                if (horizontalDistance <= threshold && edgeGap >= 0 && edgeGap < threshold) {
                    distance = edgeGap;
                }
            }

            if (this.direction === "up" && block.y + block.size <= this.y + this.height) {
                const edgeGap = this.y - (block.y + block.size);
                if (horizontalDistance <= threshold && edgeGap >= 0 && edgeGap < threshold) {
                    distance = edgeGap;
                }
            }

            if (this.direction === "right" && block.x >= this.x) {
                const edgeGap = block.x - (this.x + this.width);
                if (verticalDistance <= threshold && edgeGap >= 0 && edgeGap < threshold) {
                    distance = edgeGap;
                }
            }

            if (this.direction === "left" && block.x + block.size <= this.x + this.width) {
                const edgeGap = this.x - (block.x + block.size);
                if (verticalDistance <= threshold && edgeGap >= 0 && edgeGap < threshold) {
                    distance = edgeGap;
                }
            }

            if (distance < closestDistance) {
                closestDistance = distance;
                closestBlock = block;
            }
        }

        return closestBlock;
    }

    private resolveDirection(data: MoveEventPayload): Direction {
        if (data.dx > 0) return "right";
        if (data.dx < 0) return "left";
        if (data.dy > 0) return "down";
        return "up";
    }

    private getHeldBlockPosition(playerX: number, playerY: number, direction: Direction) {
        switch (direction) {
            case "up":
                return { x: playerX, y: playerY - this.height };
            case "down":
                return { x: playerX, y: playerY + this.height };
            case "left":
                return { x: playerX - this.width, y: playerY };
            case "right":
                return { x: playerX + this.width, y: playerY };
        }
    }

    private getIntersectingEmptyAnswerSlot(block: Block) {
        const blockCenterX = block.x + block.size / 2;
        const blockCenterY = block.y + block.size / 2;

        return this.answerSlots.find((slot) => {
            const occupiedByOtherBlock = slot.block !== null && slot.block !== block;
            if (occupiedByOtherBlock) {
                return false;
            }

            return (
                blockCenterX >= slot.x &&
                blockCenterX <= slot.x + slot.size &&
                blockCenterY >= slot.y &&
                blockCenterY <= slot.y + slot.size
            );
        }) ?? null;
    }

    private clearAnswerSlotForBlock(block: Block) {
        for (const slot of this.answerSlots) {
            if (slot.block === block) {
                slot.block = null;
            }
        }
    }

    private isBlockInAnswerZone(block: Block) {
        return this.answerSlots.some((slot) => slot.block === block);
    }

    private detachHeldBlock() {
        if (!this.heldBlock) {
            return;
        }

        this.heldBlock.setHeld(false);
        this.heldBlock = null;
    }

    private collidesWithBlockingBlock(x: number, y: number, blocks: Block[]) {
        return blocks.some((block) => {
            if (this.isBlockInAnswerZone(block)) {
                return false;
            }

            return block.collidesWithRect(x, y, this.width, this.height);
        });
    }

    private collidesWithAnyBlock(x: number, y: number, blocks: Block[]) {
        return blocks.some((block) => block.collidesWithRect(x, y, this.width, this.height));
    }

    private rectFitsBounds(x: number, y: number, width: number, height: number) {
        return (
            x >= this.bounds.minX &&
            y >= this.bounds.minY &&
            x + width <= this.bounds.maxX + width &&
            y + height <= this.bounds.maxY + height
        );
    }

    private spawnDashAfterimages(startX: number, startY: number, dx: number, dy: number) {
        const count = 3;

        for (let i = 1; i <= count; i++) {
            this.afterimages.push({
                x: startX - dx * i * 18,
                y: startY - dy * i * 18,
                alpha: 0.42 - i * 0.08,
            });
        }
    }

    private clampToBounds() {
        this.x = this.clampValue(this.x, this.bounds.minX, this.bounds.maxX);
        this.y = this.clampValue(this.y, this.bounds.minY, this.bounds.maxY);
    }

    private clampValue(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }
}
