import { UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="bg-blue p-1 flex flex-row justify-between min-w-screen h-10">
      <div></div>
      <h1 className="text-white text-xl">NTNUdle</h1>
      <div className="">
        <UserButton showName={false} afterSignOutUrl="/" />
      </div>
    </div>
  );
};
