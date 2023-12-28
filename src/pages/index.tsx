import { ImageComponent } from "~/components/image";
import { H2 } from "~/components/typography/h2";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <ImageComponent
        src="/logo.svg"
        alt="NTNU logo"
        ratio={16 / 9}
        width={500}
      />
      <H2>Guess NTNU Study Programme</H2>
    </div>
  );
};

export default Home;
