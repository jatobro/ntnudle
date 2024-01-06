import { type Programme } from "@prisma/client";

export class Game {
  programmes: Programme[];
  index: number;
  guesses: string[];
  answers: string[];
  answer: Programme | undefined;

  constructor(
    programmes: Programme[],
    serialized: string | undefined = undefined,
  ) {
    this.programmes = programmes;

    if (serialized) {
      const [index, guesses, answers] = serialized.split("-");

      this.index = index
        ? +index
        : Math.floor(Math.random() * programmes.length);
      this.guesses = guesses ? guesses.split(" ") : [];
      this.answers = answers ? answers.split(" ") : [];
    } else {
      this.index = Math.floor(Math.random() * programmes.length);
      this.guesses = ["", "", "", "", ""];
      this.answers = [];
    }
    this.answer = programmes[this.index];
  }

  enter(guess: string) {
    const guessedProgramme = this.programmes.find(
      (programme) => (programme.name = guess),
    );

    console.log(guessedProgramme);
  }
}
