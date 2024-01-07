import { ImageComponent as Image } from "~/components/image";

import { ProgrammeGuesser } from "~/components/game/programme-guesser";
import { H3 } from "~/components/typography/h3";
import { useProgrammes } from "~/hooks/useProgrammes";

const Home = () => {
  const { isLoading, programmes } = useProgrammes();

  return (
    <div className="flex flex-col items-center gap-7 pt-10 w-5/6">
      <div className="flex flex-col items-center w-1/3 gap-4">
        <Image src="/logo.svg" alt="NTNU logo" ratio={16 / 9} width={250} />
        <H3>Find Study Programme of Today</H3>
      </div>
      <ProgrammeGuesser isLoading={isLoading} programmes={programmes} />
    </div>
  );
};

export default Home;
