import Image from "next/image";

export const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-2/3">
      <div className="w-1/3 flex items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </div>
      <h1 className="dark:text-slate-200 text-xl sm:text-3xl md:text-5xl w-5/6 text-center">
        Guess today&apos;s study programme!
      </h1>
    </div>
  );
};
