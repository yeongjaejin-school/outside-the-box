import { assertAlphaNumericValue, Block } from "./Block";

export class InvisibleBlock extends Block {
    private revealed = false;
    private collisionGlowSeconds = 0;

    constructor(x: number, y: number, size: number, value: string | number) {
        super("invisible", x, y, size, "#ffffff", assertAlphaNumericValue(value));
    }

    public override onPickedUp() {
        this.revealed = true;
        return true;
    }

    public notifyPlayerCollision() {
        this.collisionGlowSeconds = 0.3;
    }

    public override update(deltaSeconds: number) {
        this.collisionGlowSeconds = Math.max(0, this.collisionGlowSeconds - deltaSeconds);
    }

    protected override getFillStyle() {
        if (!this.revealed && this.collisionGlowSeconds > 0) {
            return "rgba(255, 235, 59, 0.45)";
        }

        return this.revealed ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)";
    }

    protected override getStrokeStyle() {
        if (!this.revealed && this.collisionGlowSeconds > 0) {
            return "rgba(255, 235, 59, 0.95)";
        }

        if (!this.revealed) {
            return "rgba(17,17,17,0)";
        }

        return super.getStrokeStyle();
    }

    protected override getTextStyle() {
        return this.revealed ? "#111111" : "rgba(17,17,17,0)";
    }
}
