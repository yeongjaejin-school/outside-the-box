import { EventListener } from "./Events/EventListener";
import { EventEmitter } from "./Events/EventEmitter";
import { GameEvent, MoveEventPayload } from "./Events/Event.ts";
import { Block } from "./objects/Block";
import type { AnswerSlotEntity } from "../benchmark2/types";

type Direction = "up" | "down" | "left" | "right";

type Bounds = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};

export class PlayerControl extends EventListener {
    public x = 0;
    public y = 0;
    public readonly width = 48;
    public readonly height = 48;

    private readonly speed = 5;
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

    constructor(emitter: EventEmitter) {
        super(emitter);

        this.sprites = {
            up: this.loadSprite("/benchmark2/assets/player/Player_Up.png"),
            down: this.loadSprite("/benchmark2/assets/player/Player_Down.png"),
            left: this.loadSprite("/benchmark2/assets/player/Player_Left.png"),
            right: this.loadSprite("/benchmark2/assets/player/Player_Right.png"),
        };

        this.x = 400;
        this.y = 300;

        this.listen<MoveEventPayload>(GameEvent.MOVE, (data) => {
            this.move(data);
        });

        this.listen(GameEvent.HOLD, () => {
            this.toggleHold();
        });
    }

    public update() {}

    public draw(ctx: CanvasRenderingContext2D) {
        const sprite = this.sprites[this.direction];

        if (sprite.complete && sprite.naturalWidth > 0) {
            ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
            return;
        }

        ctx.fillStyle = "#e53935";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    public setBounds(minX: number, minY: number, maxX: number, maxY: number) {
        this.bounds = { minX, minY, maxX, maxY };
        this.clampToBounds();

        if (this.heldBlock) {
            const heldPosition = this.getHeldBlockPosition(this.x, this.y, this.direction);
            this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
        }
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

    public resetPosition(x: number, y: number, direction: Direction = "down") {
        if (this.heldBlock) {
            this.detachHeldBlock();
        }

        this.x = x;
        this.y = y;
        this.direction = direction;
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

        const candidateX = this.clampValue(this.x + data.dx * this.speed, this.bounds.minX, this.bounds.maxX);
        const candidateY = this.clampValue(this.y + data.dy * this.speed, this.bounds.minY, this.bounds.maxY);
        const otherBlocks = this.blocks.filter((block) => block !== this.heldBlock);

        if (this.collidesWithAnyBlock(candidateX, candidateY, otherBlocks)) {
            return;
        }

        if (this.heldBlock) {
            const heldPosition = this.getHeldBlockPosition(candidateX, candidateY, nextDirection);

            if (!this.rectFitsBounds(heldPosition.x, heldPosition.y, this.width, this.height)) {
                return;
            }

            if (this.collidesWithAnyBlock(heldPosition.x, heldPosition.y, otherBlocks)) {
                return;
            }

            this.clearAnswerSlotForBlock(this.heldBlock);
            this.x = candidateX;
            this.y = candidateY;
            this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
            return;
        }

        this.x = candidateX;
        this.y = candidateY;
    }

    private toggleHold() {
        if (this.heldBlock) {
            const releaseSlot = this.getIntersectingEmptyAnswerSlot(this.heldBlock);
            const otherBlocks = this.blocks.filter((candidate) => candidate !== this.heldBlock);

            if (releaseSlot) {
                this.clearAnswerSlotForBlock(this.heldBlock);
                releaseSlot.block = this.heldBlock;
                this.heldBlock.moveTo(releaseSlot.x, releaseSlot.y);
                this.detachHeldBlock();
                return;
            }

            if (this.collidesWithAnyBlock(this.heldBlock.x, this.heldBlock.y, otherBlocks)) {
                return;
            }

            if (!this.rectFitsBounds(this.heldBlock.x, this.heldBlock.y, this.heldBlock.size, this.heldBlock.size)) {
                return;
            }

            this.detachHeldBlock();
            return;
        }

        const block = this.findNearbyFacingBlock();
        if (!block) {
            return;
        }

        const heldPosition = this.getHeldBlockPosition(this.x, this.y, this.direction);
        const otherBlocks = this.blocks.filter((candidate) => candidate !== block);

        if (!this.rectFitsBounds(heldPosition.x, heldPosition.y, this.width, this.height)) {
            return;
        }

        if (this.collidesWithAnyBlock(heldPosition.x, heldPosition.y, otherBlocks)) {
            return;
        }

        this.clearAnswerSlotForBlock(block);
        this.heldBlock = block;
        block.setHeld(true);
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

    private resolveDirection(data: MoveEventPayload): Direction {
        if (data.dx > 0) return "right";
        if (data.dx < 0) return "left";
        if (data.dy > 0) return "down";
        return "up";
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

    private detachHeldBlock() {
        if (!this.heldBlock) {
            return;
        }

        this.heldBlock.setHeld(false);
        this.heldBlock = null;
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

    private clampToBounds() {
        this.x = this.clampValue(this.x, this.bounds.minX, this.bounds.maxX);
        this.y = this.clampValue(this.y, this.bounds.minY, this.bounds.maxY);
    }

    private clampValue(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }
}
