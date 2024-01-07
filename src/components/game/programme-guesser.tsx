import { type Programme } from "@prisma/client";
import { useState } from "react";
import { api } from "~/utils/api";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { Selector } from "./selector";

type ProgrammeGuesserProps = {
  isLoading: boolean;
  programmes: Programme[];
};

export const ProgrammeGuesser = (
  { isLoading, programmes }: ProgrammeGuesserProps,
) => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) return <div />;

  const { data: dailyProgramme } = api.programme.getByName.useQuery({
    name: "Datateknologi",
  });

  if (!dailyProgramme) return <div />;

  const filteredProgrammes = programmes.filter(
    (programme) =>
      searchQuery !== "" &&
      programme.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      programme.name.toLowerCase() !== searchQuery.toLowerCase(),
  );

  const handleSubmit = () => {
    if (searchQuery === dailyProgramme.name) {
      toast({
        title: "Congratulations!!!",
        description: "You found the study programme of today!",
      });
    }

    setSearchQuery("");
  };
  return (
    <div className="flex flex-col w-full gap-4 items-center">
      <div className="w-1/2 flex gap-2">
        <Input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Computer Science"
        />
        <Button
          type="submit"
          disabled={
            !programmes.some((programme) => programme.name === searchQuery)
          }
          onClick={handleSubmit}
        >
          Go
        </Button>
      </div>
      <Selector
        options={filteredProgrammes}
        onSelect={(programmeName) => setSearchQuery(programmeName)}
      />
    </div>
  );
};
