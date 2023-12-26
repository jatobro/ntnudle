import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { LightSwitch } from "./LightSwitch";
import { UserButton } from "./UserButton";

export const NavBar = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className="bg-red-500 p-1 flex flex-row justify-between items-center h-10 text-white text-xs gap-4">
      <div className="h-10 w-40 flex items-center pl-2 min-w-fit">
        <LightSwitch />
      </div>
      <Link className="text-2xl" href="/">
        NTNUdle
      </Link>
      <div className="h-10 flex items-center w-40 justify-end">
        {isLoaded ? (
          isSignedIn ? (
            <UserButton label={user.fullName} />
          ) : (
            <Link className="text-end" href="/sign-in">
              Sign In
            </Link>
          )
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
};
