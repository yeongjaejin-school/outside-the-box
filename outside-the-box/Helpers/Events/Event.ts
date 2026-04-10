// Events.ts

export enum GameEvent {
    MOVE = "MOVE",
    DASH = "DASH",
    HOLD = "HOLD"
}

// Payload types for each event
export interface MoveEventPayload {
    dx: number;
    dy: number;
}

export interface DashEventPayload {}

export interface HoldEventPayload {}