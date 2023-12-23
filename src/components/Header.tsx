import { UserButton } from "@clerk/nextjs";
import { LightSwitch } from "./LightSwitch";

export const Header = () => {
  return (
    <div className="bg-blue p-1 flex flex-row justify-between min-w-screen h-10">
      <LightSwitch />
      <h1 className="text-white">Created by @jatobro</h1>
      <div className="">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
