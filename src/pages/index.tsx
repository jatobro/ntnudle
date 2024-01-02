import { ImageComponent } from "~/components/image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { api } from "~/utils/api";

import { type Programme } from "@prisma/client";
import { useState } from "react";
import { H3 } from "~/components/typography/h3";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [guesses, setGuesses] = useState<Programme[]>([]);

  const { isLoading, data } = api.programme.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Something went wrong...</div>;

  const allProgrammes: Programme[] = data;

  const dailyProgramme = allProgrammes[0]!;

  const filteredProgrammes = allProgrammes.filter(
    (programme) =>
      searchQuery !== "" &&
      programme.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      programme.name.toLowerCase() !== searchQuery.toLowerCase(),
  );

  return (
    <div className="flex flex-col items-center gap-6 pt-10 w-5/6">
      <div className="flex flex-col items-center w-1/3 gap-2">
        <ImageComponent
          src="/logo.svg"
          alt="NTNU logo"
          ratio={16 / 9}
          width={250}
        />
        <H3>Find Study Programme of Today</H3>
      </div>

      <div className="flex w-2/3 md:w-1/2 lg:w-1/3 space-x-2">
        <Input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Computer Science"
        />
        <Button
          type="submit"
          disabled={
            !allProgrammes.some((programme) => programme.name === searchQuery)
          }
          onClick={() => {
            setGuesses([
              allProgrammes.find(
                (programme) => programme.name === searchQuery,
              )!,
              ...guesses,
            ]);
            setSearchQuery("");
          }}
        >
          Go
        </Button>
      </div>
      <div className="flex gap-2 h-[40px]">
        {filteredProgrammes.map((programme, idx) => {
          if (idx > 5) return false;
          return (
            <Button
              variant="secondary"
              key={programme.id}
              onClick={() => setSearchQuery(programme.name)}
            >
              {programme.name}
            </Button>
          );
        })}
      </div>
      <div className="w-5/6 max-w-screen">
        {guesses.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="w-[100px]">Faculty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guesses.map((programme, idx) => (
                <TableRow key={idx}>
                  <TableCell>{programme.name}</TableCell>
                  <TableCell
                    className={`bg-${
                      programme.faculty === dailyProgramme.faculty
                        ? "green"
                        : "red"
                    }-500`}
                  >
                    {programme.faculty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Home;
