import { DayProblem } from "../DayProblem.interface";
import { Day1Rotation } from "./Day1Rotation.class";

export class Day1 implements DayProblem {
    day: number = 1;

    part1(input: string[]): Promise<string> {
        const rotations = input.map((l) => new Day1Rotation(l));

        let total0 = 0;
        let currentValue = 50;

        for (let rotation of rotations) {
            if (rotation.rotation == "L") currentValue -= rotation.ammount;
            else currentValue += rotation.ammount;

            while (currentValue < 0) currentValue += 100;
            while (currentValue >= 100) currentValue -= 100;

            if (currentValue == 0) total0++;
        }

        return Promise.resolve(total0.toString());
    }

    // 5297 is too low
    // 7000 is to high
    // 5774 is not the answer

    part2(input: string[]): Promise<string> {
        const rotations = input.map((l) => new Day1Rotation(l));

        let total0 = 0;
        let currentValue = 50;
        let lastValue = 50;

        for (let rotation of rotations) {
            if (rotation.ammount == 0) {
                total0++;
                console.log("Has ZERO!!");
                continue;
            }

            lastValue = currentValue;

            if (rotation.rotation == "L") currentValue -= rotation.ammount;
            else currentValue += rotation.ammount;

            if (currentValue == 0) total0++;

            while (currentValue < 0) {
                currentValue += 100;
                total0++;
            }

            while (currentValue >= 100) {
                currentValue -= 100;
                total0++;
            }

            if (lastValue == 0 && currentValue != 0) total0--;

            console.log(currentValue, total0, rotation.input);
        }

        return Promise.resolve(total0.toString());
    }
}
