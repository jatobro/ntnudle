import { type PropsWithChildren } from "react";

export const H3 = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
      {children}
    </h2>
  );
};
