import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { LightSwitch } from "./LightSwitch";
import { UserButton } from "./UserButton";

export const Header = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className="bg-blue p-1 flex flex-row justify-between items-center min-w-screen h-10 text-white text-xs">
      <div className="h-10 w-40 flex items-center pl-2">
        <LightSwitch />
      </div>
      <Link className="text-2xl" href="/">
        NTNUdle
      </Link>
      <div className="h-10 w-40 flex items-center justify-end pr-2">
        {isLoaded ? (
          isSignedIn ? (
            <UserButton label={user.fullName} />
          ) : (
            <Link href="/sign-in">Sign In</Link>
          )
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
};
