export enum GameEvent {
    MOVE = "MOVE",
    DASH = "DASH",
    HOLD = "HOLD"
}

export interface MoveEventPayload {
    dx: number;
    dy: number;
}

export interface DashEventPayload {}

export interface HoldEventPayload {}
