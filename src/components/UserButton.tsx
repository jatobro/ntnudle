import { UserButton as ClerkUserButton } from "@clerk/nextjs";

type UserButtonProps = {
  label?: string | null;
};

export const UserButton = ({ label = "" }: UserButtonProps) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <label>{label}</label>
      <ClerkUserButton afterSignOutUrl="/" />
    </div>
  );
};
