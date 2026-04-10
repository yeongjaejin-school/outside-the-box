import { EventListener } from "./Events/EventListener";
import { EventEmitter } from "./Events/EventEmitter";
import { GameEvent, MoveEventPayload } from "./Events/Event.ts";

type Direction = "up" | "down" | "left" | "right";

export class PlayerControl extends EventListener {
    public x = 0;
    public y = 0;
    public readonly width = 48;
    public readonly height = 48;

    private readonly speed = 5;
    private direction: Direction = "down";
    private readonly sprites: Record<Direction, HTMLImageElement>;
    private bounds = {
        minX: 0,
        maxX: Number.POSITIVE_INFINITY,
        minY: 0,
        maxY: Number.POSITIVE_INFINITY,
    };

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

        this.listen(GameEvent.DASH, () => {
            console.log("Dash triggered");
        });

        this.listen(GameEvent.HOLD, () => {
            console.log("Special triggered");
        });
    }

    public update() {}

    public setBounds(minX: number, minY: number, maxX: number, maxY: number) {
        this.bounds = { minX, minY, maxX, maxY };
        this.clampToBounds();
    }

    public resetPosition(x: number, y: number, direction: Direction = "down") {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.clampToBounds();
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const sprite = this.sprites[this.direction];

        if (sprite.complete && sprite.naturalWidth > 0) {
            ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
            return;
        }

        ctx.fillStyle = "#e53935";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    private loadSprite(src: string) {
        const sprite = new Image();
        sprite.src = src;
        return sprite;
    }

    private move(data: MoveEventPayload) {
        if (data.dx > 0) this.direction = "right";
        else if (data.dx < 0) this.direction = "left";
        else if (data.dy > 0) this.direction = "down";
        else if (data.dy < 0) this.direction = "up";

        this.x += data.dx * this.speed;
        this.y += data.dy * this.speed;
        this.clampToBounds();
    }

    private clampToBounds() {
        this.x = Math.min(Math.max(this.x, this.bounds.minX), this.bounds.maxX);
        this.y = Math.min(Math.max(this.y, this.bounds.minY), this.bounds.maxY);
    }
}
