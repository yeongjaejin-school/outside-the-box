export type BlockType = "normal";

const isValidValue = (value: string) => {
    if (/^[a-z]$/i.test(value)) {
        return true;
    }

    if (/^\d{1,2}$/.test(value)) {
        const numericValue = Number(value);
        return numericValue >= 0 && numericValue <= 99;
    }

    return false;
};

export abstract class Block {
    public x: number;
    public y: number;
    public readonly size: number;
    public readonly color: string;
    public readonly value: string;
    public readonly type: BlockType;
    public held = false;

    protected constructor(type: BlockType, x: number, y: number, size: number, color: string, value: string | number) {
        const normalizedValue = `${value}`.trim().toUpperCase();

        if (!isValidValue(normalizedValue)) {
            throw new Error(`Invalid block value "${value}". Blocks must use one letter or a number from 0 to 99.`);
        }

        this.type = type;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.value = normalizedValue;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);

        ctx.strokeStyle = this.held ? "#3a3a3a" : "#111111";
        ctx.lineWidth = this.held ? 3 : 2;
        ctx.strokeRect(this.x, this.y, this.size, this.size);

        ctx.fillStyle = "#111111";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `bold ${Math.max(18, Math.floor(this.size * 0.42))}px "Trebuchet MS", sans-serif`;
        ctx.fillText(this.value, this.x + this.size / 2, this.y + this.size / 2);
    }

    public collidesWithRect(x: number, y: number, width: number, height: number) {
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
}
