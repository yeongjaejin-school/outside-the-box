import { EventListener } from "./Events/EventListener";
import { EventEmitter } from "./Events/EventEmitter";
import { GameEvent, MoveEventPayload } from "./Events/Event.ts";

export class PlayerControl extends EventListener {
    public x: number = 0;
    public y: number = 0;
    private speed: number = 5;

    constructor(emitter: EventEmitter) {
        super(emitter);

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