export class Game {
  index: number;
  guesses: string[];
  answers: string[];
  answer: string;

  constructor(
    serialized: string | undefined = undefined,
    programmeNames: string[],
  ) {
    if (serialized) {
      const [index, guesses, answers] = serialized.split("-");

      this.index = index ? +index : 0;
      this.guesses = guesses ? guesses.split(" ") : [];
      this.answers = answers ? answers.split(" ") : [];
    } else {
      this.index = Math.floor(Math.random() * programmeNames.length);
      this.guesses = ["", "", "", "", ""];
      this.answers = [];
    }

    this.answer = programmeNames[this.index] ?? "";
  }
}
