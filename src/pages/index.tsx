import { ImageComponent } from "~/components/image";
import { H1 } from "~/components/typography/h1";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <>
        <ImageComponent
          src="/logo.svg"
          alt="NTNU logo"
          ratio={16 / 9}
          width={200}
        />
        <H1 centered>Guess NTNU Study Programme</H1>
      </>
    </div>
  );
};

export default Home;
