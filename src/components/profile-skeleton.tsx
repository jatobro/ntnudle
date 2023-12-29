import { Skeleton } from "./ui/skeleton";

export const ProfileSkeleton = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex flex-col items-end gap-2">
        <Skeleton className="h-2 w-[250px]" />
        <Skeleton className="h-2 w-[200px]" />
      </div>
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  );
};
