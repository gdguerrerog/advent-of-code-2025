export class Day1Rotation {
    public readonly rotation: "L" | "R";
    public readonly ammount: number;
    public readonly input: string;

    constructor(line: string) {
        this.input = line;
        this.rotation = line[0] as "L" | "R";
        this.ammount = Number.parseInt(line.substring(1));
    }
}
