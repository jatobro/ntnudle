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

  const { data } = api.programme.getAll.useQuery();

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
    <div className="flex flex-col items-center gap-6 pt-10">
      <>
        <ImageComponent
          src="/logo.svg"
          alt="NTNU logo"
          ratio={16 / 9}
          width={400}
        />
        <H3>Find Study Programme of Today</H3>
      </>
      <div className="flex w-full max-w-sm items-center space-x-2">
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
      <div className="flex gap-2">
        {filteredProgrammes.map((programme, idx) => {
          if (idx > 5) return false;
          return (
            <Button
              key={programme.id}
              onClick={() => setSearchQuery(programme.name)}
            >
              {programme.name}
            </Button>
          );
        })}
      </div>
      <div className="w-[800px]">
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
