import { assertAlphaNumericValue, Block } from "./Block";

export class GlassBlock extends Block {
    private wasReleased = false;

    constructor(x: number, y: number, size: number, value: string | number) {
        super("glass", x, y, size, "rgba(120, 196, 255, 0.5)", assertAlphaNumericValue(value));
    }

    public override canBePickedUp() {
        return !this.destroyed;
    }

    public override onPickedUp() {
        if (this.wasReleased) {
            this.destroy();
            return false;
        }

        return true;
    }

    public override onReleased() {
        this.wasReleased = true;
    }
}
