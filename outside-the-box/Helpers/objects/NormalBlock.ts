import { Block } from "./Block";

export class NormalBlock extends Block {
    constructor(x: number, y: number, size: number, color: string, value: string | number) {
        super("normal", x, y, size, color, value);
    }
}
