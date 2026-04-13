import { assertAlphaNumericValue, Block } from "./Block";

export class NormalBlock extends Block {
    constructor(x: number, y: number, size: number, value: string | number) {
        super("normal", x, y, size, "#ffffff", assertAlphaNumericValue(value));
    }
}
