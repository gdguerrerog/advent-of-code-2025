export interface DayProblem {
    day: number;
    part1(input: string[]): Promise<string>;
    part2(input: string[]): Promise<string>;
}
