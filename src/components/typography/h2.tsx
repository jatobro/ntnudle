import { type HeadingProps } from "./props";

export const H2 = ({ centered, children }: HeadingProps) => {
  return (
    <h2
      className={`${
        centered ? "text-center" : ""
      } scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
    >
      {children}
    </h2>
  );
};
