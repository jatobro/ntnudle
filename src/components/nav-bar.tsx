import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="flex flex-row gap-2 bg-muted text-muted-foreground p-1 h-12">
      <div className="flex-1">
        <ModeToggle />
      </div>

      <Link
        className="text-2xl flex-1 flex justify-center items-center"
        href="/"
      >
        NTNUdle
      </Link>
      <div className="flex-1 flex justify-end items-center">
        {isLoaded ? (
          isSignedIn ? (
            <UserButton
              afterSignOutUrl="/"
              showName={true}
              appearance={{
                elements: {
                  userButtonOuterIdentifier: {
                    color: "var(--muted-foreground)",
                  },
                },
              }}
            />
          ) : (
            <Link href="/sign-in">Sign In</Link>
          )
        ) : null}
      </div>
    </header>
  );
};
