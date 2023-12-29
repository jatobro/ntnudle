import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

import { useRouter } from "next/router";
import { ModeToggle } from "./mode-toggle";
import { ProfileSkeleton } from "./profile-skeleton";
import { Button } from "./ui/button";

export const NavBar = () => {
  const { isLoaded, isSignedIn } = useUser();

  const router = useRouter();

  return (
    <header className="flex flex-row gap-2 bg-background text-foreground p-1 h-14 border-border border-b">
      <div className="flex-1 items-center">
        <ModeToggle />
      </div>

      <Link
        className="text-2xl flex-1 flex justify-center items-center"
        href="/"
      >
        <div className="text-lg font-semibold">NTNUdle</div>
      </Link>
      <div className="flex-1 flex justify-end items-center">
        {isLoaded ? (
          isSignedIn || router.asPath !== "/" ? (
            <UserButton
              afterSignOutUrl="/"
              showName
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
        ) : (
          <ProfileSkeleton />
        )}
      </div>
    </header>
  );
};
