type EventCallback<T = any> = (payload: T) => void;

export class EventEmitter {
    private listeners: Map<string, EventCallback[]> = new Map();

    public on<T>(event: string, callback: EventCallback<T>) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event)!.push(callback);
    }

    public off<T>(event: string, callback: EventCallback<T>) {
        const callbacks = this.listeners.get(event);
        if (!callbacks) return;

        this.listeners.set(
            event,
            callbacks.filter((cb) => cb !== callback)
        );
    }

    public emit<T>(event: string, payload: T) {
        const callbacks = this.listeners.get(event);
        if (!callbacks) return;

        for (const cb of callbacks) {
            cb(payload);
        }
    }
}
