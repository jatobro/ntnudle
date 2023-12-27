import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

import { useRouter } from "next/router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const NavBar = () => {
  const { isLoaded, isSignedIn } = useUser();

  const router = useRouter();

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
          isSignedIn || router.asPath !== "/" ? (
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
            <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
          )
        ) : null}
      </div>
    </header>
  );
};
