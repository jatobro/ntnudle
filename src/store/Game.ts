import { type Programme } from "@prisma/client";
import { type Programmes } from "~/types";

export class Game {
  index: number;
  guesses: string[];
  answers: string[];
  answer: Programme;

  constructor(
    serialized: string | undefined = undefined,
    programmes: Programmes,
  ) {
    if (serialized) {
      const [index, guesses, answers] = serialized.split("-");

      this.index = index ? +index : 0;
      this.guesses = guesses ? guesses.split(" ") : [];
      this.answers = answers ? answers.split(" ") : [];
    } else {
      this.index = Math.floor(Math.random() * programmes.length);
      this.guesses = ["", "", "", "", ""];
      this.answers = [];
    }

    this.answer = programmes[this.index] ?? programmes[0];
  }
}
