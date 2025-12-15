import { Day1 } from "./Day1/Day1.class";
import { DayProblem } from "./DayProblem.interface";
import * as fs from "fs";

const days: DayProblem[] = [new Day1()];

const options = {
    day: Number.parseInt(process.argv[3]),
    part: Number.parseInt(process.argv[4]),
    isTest: process.argv[2] == "true",
};

const fileUrl = `files/Day${options.day}/${options.isTest ? "test" : "final"}-input.txt`;

const input = fs.readFileSync(fileUrl, "utf-8").trim();
const lines = input.split("\n").map((s) => s.trim());

const day: DayProblem = days[options.day - 1];

let response: Promise<string>;

if (options.part == 1) response = day.part1(lines);
else response = day.part2(lines);

response.then((response) => {
    const writeUrl = `files/Day${options.day}/${options.isTest ? "test" : "final"}-response.txt`;
    fs.writeFileSync(writeUrl, response, { encoding: "utf-8" });
    console.log(response);
});
