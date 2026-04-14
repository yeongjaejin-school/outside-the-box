import { assertAlphaNumericValue, Block } from "./Block";

export class HeavyBlock extends Block {
    constructor(x: number, y: number, size: number, value: string | number) {
        super("heavy", x, y, size, "#8f8f8f", assertAlphaNumericValue(value));
    }

    public override getMoveSpeedMultiplier() {
        return 0.25;
    }
}
