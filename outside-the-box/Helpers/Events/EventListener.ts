// EventListener.ts

import { EventEmitter } from "./EventEmitter";

export class EventListener {
    protected emitter: EventEmitter;

    constructor(emitter: EventEmitter) {
        this.emitter = emitter;
    }

    protected listen<T>(event: string, callback: (payload: T) => void) {
        this.emitter.on(event, callback);
    }

    protected stopListening<T>(event: string, callback: (payload: T) => void) {
        this.emitter.off(event, callback);
    }
}