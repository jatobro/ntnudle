import type { Programme } from "@prisma/client";

import { type Dispatch, type SetStateAction } from "react";
import { MAX_OPTIONS } from "~/constants/form";
import { Button } from "./ui/button";

type SelectorProps = {
  programmes: Programme[];
  querySetter: Dispatch<SetStateAction<string>>;
};

export const Selector = ({ programmes, querySetter }: SelectorProps) => {
  return (
    <div className="flex gap-2 h-[40px] w-full justify-center">
      {programmes.slice(0, MAX_OPTIONS).map((programme) => {
        return (
          <Button
            variant="secondary"
            key={programme.id}
            onClick={() => querySetter(programme.name)}
          >
            {programme.name}
          </Button>
        );
      })}
    </div>
  );
};
