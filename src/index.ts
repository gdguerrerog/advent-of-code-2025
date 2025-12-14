import { Day1 } from "./Day1/Day1.class";
import { DayProblem } from "./DayProblem.interface";
import * as fs from "fs";

const days: DayProblem[] = [new Day1()];

const options = {
    day: 1,
    part: 1,
    isTest: true,
};

const fileUrl = `files/Day${options.day}/${options.isTest ? "test" : "end"}-input.txt`;

const input = fs.readFileSync(fileUrl, "utf-8");

const day: DayProblem = days[options.day - 1];

let response: Promise<string>;

if (options.part == 1) response = day.part1(input);
else response = day.part2(input);

response.then((response) => {
    const writeUrl = `files/Day${options.day}/${options.isTest ? "test" : "end"}-response.txt`;
    fs.writeFileSync(writeUrl, response, { encoding: "utf-8" });
    console.log(response);
});
