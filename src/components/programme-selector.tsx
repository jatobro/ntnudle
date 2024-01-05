import type { Programme } from "@prisma/client";

import { type MouseEventHandler } from "react";
import { Button } from "./ui/button";

type ProgrammeSelectorProps = {
  programmes: Programme[];
  onSelect: MouseEventHandler<HTMLButtonElement>;
  max?: number;
};

export const ProgrammesSelector = (
  { programmes, onSelect, max = 5 }: ProgrammeSelectorProps,
) => {
  return (
    <div className="flex gap-2 h-[40px] w-full">
      {programmes.map((programme, idx) => {
        if (idx > max) return false;
        return (
          <Button
            className="active:opacity-50"
            variant="secondary"
            key={programme.id}
            onClick={onSelect}
          >
            {programme.name}
          </Button>
        );
      })}
    </div>
  );
};
