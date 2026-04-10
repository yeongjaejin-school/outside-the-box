import { EventEmitter } from "./Events/EventEmitter";
import { GameEvent, MoveEventPayload } from "./Events/Event.ts";

export class InputManager {
    private keys: { [key: string]: boolean } = {};
    private emitter: EventEmitter;
    private readonly movementKeys = new Set(["w", "a", "s", "d", " ", "h"]);

    constructor(emitter: EventEmitter) {
        this.emitter = emitter;

        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }

    private onKeyDown(event: KeyboardEvent) {
        const key = event.key.toLowerCase();
        this.keys[key] = true;

        if (this.movementKeys.has(key)) {
            event.preventDefault();
        }
    }

    private onKeyUp(event: KeyboardEvent) {
        const key = event.key.toLowerCase();
        this.keys[key] = false;

        if (this.movementKeys.has(key)) {
            event.preventDefault();
        }
    }

    public update() {
        let dx = 0;
        let dy = 0;

        if (this.keys["w"]) dy -= 1;
        if (this.keys["s"]) dy += 1;
        if (this.keys["a"]) dx -= 1;
        if (this.keys["d"]) dx += 1;

        if (dx !== 0 || dy !== 0) {
            this.emitter.emit(GameEvent.MOVE, { dx, dy });
        }

        if (this.keys[" "]) {
            this.emitter.emit(GameEvent.DASH, {});
        }

        if (this.keys["h"]) {
            this.emitter.emit(GameEvent.HOLD, {});
        }
    }
}
