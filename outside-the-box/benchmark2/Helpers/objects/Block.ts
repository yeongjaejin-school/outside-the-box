export type BlockType = "normal" | "invisible" | "countdown" | "heavy" | "glass";

const isValidAlphaNumericValue = (value: string) => {
    if (/^[a-z]$/i.test(value)) {
        return true;
    }

    if (/^\d{1,2}$/.test(value)) {
        const numericValue = Number(value);
        return numericValue >= 0 && numericValue <= 99;
    }

    return false;
};

export const normalizeBlockValue = (value: string | number) => `${value}`.trim().toUpperCase();

export const assertAlphaNumericValue = (value: string | number) => {
    const normalizedValue = normalizeBlockValue(value);

    if (!isValidAlphaNumericValue(normalizedValue)) {
        throw new Error(`Invalid block value "${value}". Blocks must use one letter or a number from 0 to 99.`);
    }

    return normalizedValue;
};

export const assertNumericBlockValue = (value: string | number) => {
    const normalizedValue = normalizeBlockValue(value);

    if (!/^\d{1,2}$/.test(normalizedValue)) {
        throw new Error(`Invalid countdown value "${value}". Countdown blocks must use a number from 0 to 99.`);
    }

    const numericValue = Number(normalizedValue);
    if (numericValue < 0 || numericValue > 99) {
        throw new Error(`Invalid countdown value "${value}". Countdown blocks must use a number from 0 to 99.`);
    }

    return numericValue;
};

export abstract class Block {
    public x: number;
    public y: number;
    public readonly size: number;
    public readonly type: BlockType;
    public held = false;
    public destroyed = false;
    protected readonly baseColor: string;
    protected readonly baseTextColor: string;
    protected storedValue: string;

    protected constructor(type: BlockType, x: number, y: number, size: number, color: string, value: string | number, textColor = "#111111") {
        this.type = type;
        this.x = x;
        this.y = y;
        this.size = size;
        this.baseColor = color;
        this.baseTextColor = textColor;
        this.storedValue = normalizeBlockValue(value);
    }

    public get value() {
        return this.storedValue;
    }

    public getMoveSpeedMultiplier() {
        return 1;
    }

    public canBePickedUp() {
        return !this.destroyed;
    }

    public onPickedUp() {
        return true;
    }

    public onReleased() {}

    public update(_deltaSeconds: number, _blocks: Block[]) {}

    public draw(ctx: CanvasRenderingContext2D) {
        if (this.destroyed) {
            return;
        }

        ctx.save();
        ctx.fillStyle = this.getFillStyle();
        ctx.fillRect(this.x, this.y, this.size, this.size);

        const strokeStyle = this.getStrokeStyle();
        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = this.held ? 3 : 2;
            ctx.strokeRect(this.x, this.y, this.size, this.size);
        }

        const textStyle = this.getTextStyle();
        if (textStyle) {
            ctx.fillStyle = textStyle;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `bold ${Math.max(18, Math.floor(this.size * 0.42))}px "Trebuchet MS", sans-serif`;
            ctx.fillText(this.getDisplayValue(), this.x + this.size / 2, this.y + this.size / 2);
        }
        ctx.restore();
    }

    public collidesWithRect(x: number, y: number, width: number, height: number) {
        if (this.destroyed) {
            return false;
        }

        return (
            x < this.x + this.size &&
            x + width > this.x &&
            y < this.y + this.size &&
            y + height > this.y
        );
    }

    public moveTo(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public setHeld(held: boolean) {
        this.held = held;
    }

    public destroy() {
        this.destroyed = true;
        this.held = false;
    }

    protected getDisplayValue() {
        return this.storedValue;
    }

    protected getFillStyle() {
        return this.baseColor;
    }

    protected getStrokeStyle(): string | null {
        return this.held ? "#3a3a3a" : "#111111";
    }

    protected getTextStyle(): string | null {
        return this.baseTextColor;
    }
}
