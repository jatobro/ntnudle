import type { Programme } from "@prisma/client";

import { type Dispatch, type SetStateAction } from "react";

import { MAX_OPTIONS } from "~/constants/form";
import { Button } from "../ui/button";

type SelectorProps = {
  options: Programme[];
  querySetter?: Dispatch<SetStateAction<string>>;
  onSelect: (programmeName: string) => void;
};

export const Selector = ({ options, onSelect }: SelectorProps) => {
  return (
    <div className="flex gap-2 h-[40px] w-full justify-center">
      {options.slice(0, MAX_OPTIONS).map((programme) => {
        return (
          <Button
            variant="secondary"
            key={programme.id}
            onClick={() => onSelect(programme.name)}
          >
            {programme.name}
          </Button>
        );
      })}
    </div>
  );
};
