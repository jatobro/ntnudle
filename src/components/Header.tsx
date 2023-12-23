import { UserButton } from "@clerk/nextjs";
import { LightSwitch } from "./LightSwitch";

export const Header = () => {
  return (
    <div className="bg-blue p-1 flex flex-row justify-between items-center min-w-screen h-10">
      <div className="ml-5">
        <LightSwitch />
      </div>

      <h1 className="text-white text-sm">Created by @jatobro</h1>
      <div className="mr-5">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
