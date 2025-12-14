import { DayProblem } from "../DayProblem.interface";

export class Day1 implements DayProblem {
    day: number = 1;
    part1(input: string): Promise<string> {
        return Promise.resolve("Hello World");
    }
    part2(input: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
}
