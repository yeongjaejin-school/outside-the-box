import { EventListener } from "./Events/EventListener";
import { EventEmitter } from "./Events/EventEmitter";
import { GameEvent, MoveEventPayload } from "./Events/Event.ts";

export class PlayerControl extends EventListener {
    public x: number = 0;
    public y: number = 0;
    private speed: number = 5;
    private sprite: HTMLImageElement;
    
    constructor(emitter: EventEmitter) {
        super(emitter);
        this.sprite = new Image();
        this.sprite.src = "/your/path/player.png";  // Path should be fixed

        this.x = 400; // center-ish
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

    private move(data: MoveEventPayload) {
        this.x += data.dx * this.speed;
        this.y += data.dy * this.speed;

        console.log(`Player position: (${this.x}, ${this.y})`);
    }

    public update() {
        // Optional: physics, friction, etc.
    }
}