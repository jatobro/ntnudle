import { type Programme } from "@prisma/client";
import { useState } from "react";
import { api } from "~/utils/api";

import { SearchBar } from "./SearchBar";
import { SubmitButton } from "./SubmitButton";

const MAX_SUGGESTIONS = 7;

export const ProgrammeGuesser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [guess, setGuess] = useState("");

  const { isLoading, data } = api.programme.getAll.useQuery();
  const programmes: Programme[] = data ?? [];

  const filteredProgrammes = programmes.filter(
    (programme) =>
      searchQuery !== "" &&
      programme.name !== searchQuery &&
      programme.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4 w-96 h-14">
      <form
        className="flex gap-2 h-14"
        onSubmit={(e) => {
          e.preventDefault();
          setGuess(searchQuery);
        }}
      >
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SubmitButton
          disabled={
            !programmes.some((programme) => programme.name === searchQuery)
          }
        />
      </form>
      <div className="flex flex-col dark:text-slate-200 h-96">
        {isLoading && searchQuery !== ""
          ? "...Loading"
          : filteredProgrammes.map((filteredProgramme, idx) => {
              if (idx >= MAX_SUGGESTIONS) return <div></div>;

              return (
                <button
                  className="bg-blue p-2 border-2 border-black dark:border-white text-white"
                  key={filteredProgramme.id}
                  onClick={() => setSearchQuery(filteredProgramme.name)}
                >
                  {filteredProgramme.name}
                </button>
              );
            })}
      </div>
      <div className="dark:text-white">{guess}</div>
    </div>
  );
};
