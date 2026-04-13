import { assertNumericBlockValue, Block } from "./Block";

export class CountdownNumberBlock extends Block {
    private numericValue: number;
    private blinkVisible = true;
    private blinkAccumulator = 0;

    constructor(x: number, y: number, size: number, value: string | number) {
        const normalizedValue = assertNumericBlockValue(value);
        super("countdown", x, y, size, "#f4a340", normalizedValue);
        this.numericValue = normalizedValue;
    }

    public override update(deltaSeconds: number, blocks: Block[]) {
        if (this.destroyed) {
            return;
        }

        if (this.held) {
            this.numericValue -= deltaSeconds;
            this.storedValue = this.getDisplayValue();
        }

        if (this.numericValue < 3) {
            this.blinkAccumulator += deltaSeconds;
            if (this.blinkAccumulator >= 0.18) {
                this.blinkVisible = !this.blinkVisible;
                this.blinkAccumulator = 0;
            }
        } else {
            this.blinkVisible = true;
            this.blinkAccumulator = 0;
        }

        if (this.numericValue < 0) {
            this.explode(blocks);
        }
    }

    protected override getDisplayValue() {
        return `${Math.max(0, Math.floor(this.numericValue))}`;
    }

    protected override getFillStyle() {
        return this.numericValue < 5 ? "#d73a31" : "#f4a340";
    }

    protected override getTextStyle() {
        if (this.numericValue < 3 && !this.blinkVisible) {
            return null;
        }

        return this.numericValue < 5 ? "#ffffff" : "#111111";
    }

    private explode(blocks: Block[]) {
        const radius = this.size * 1.5;
        const centerX = this.x + this.size / 2;
        const centerY = this.y + this.size / 2;

        this.destroy();

        for (const block of blocks) {
            if (block === this || block.destroyed) {
                continue;
            }

            const blockCenterX = block.x + block.size / 2;
            const blockCenterY = block.y + block.size / 2;
            const distance = Math.hypot(blockCenterX - centerX, blockCenterY - centerY);

            if (distance <= radius) {
                block.destroy();
            }
        }
    }
}
