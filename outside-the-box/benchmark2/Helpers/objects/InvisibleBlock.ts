import { assertAlphaNumericValue, Block } from "./Block";

export class InvisibleBlock extends Block {
    private revealed = false;

    constructor(x: number, y: number, size: number, value: string | number) {
        super("invisible", x, y, size, "#ffffff", assertAlphaNumericValue(value));
    }

    public override onPickedUp() {
        this.revealed = true;
        return true;
    }

    protected override getFillStyle() {
        return this.revealed ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)";
    }

    protected override getStrokeStyle() {
        if (!this.revealed) {
            return "rgba(17,17,17,0)";
        }

        return super.getStrokeStyle();
    }

    protected override getTextStyle() {
        return this.revealed ? "#111111" : "rgba(17,17,17,0)";
    }
}
