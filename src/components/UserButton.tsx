import { UserButton as ClerkUserButton } from "@clerk/nextjs";

type UserButtonProps = {
  label?: string | null;
};

export const UserButton = ({ label = "" }: UserButtonProps) => {
  return (
    <div className="flex flex-row items-center justify-around w-full">
      <label className="">{label}</label>
      <ClerkUserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            userButtonBox: {
              width: "30%",
            },
          },
        }}
      />
    </div>
  );
};
