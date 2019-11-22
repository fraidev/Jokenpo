export class Calculator {

    public sum(... value: number[]): number {
        const result = value.reduce((a,b) => a + b);
        return result;
    }
}