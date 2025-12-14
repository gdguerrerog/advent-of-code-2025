import { Day1 } from "./Day1/Day1.class";
import { DayProblem } from "./DayProblem.interface";

const days: DayProblem[] = [new Day1()]

const options = {
    day: 1,
    part: 1,
    isTest: true,
}

const fileUrl = `files/Day${options.day}/.`
