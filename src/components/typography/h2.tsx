import { type PropsWithChildren } from "react";

export const H2 = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
      {children}
    </h2>
  );
};
