import { type HeadingProps } from "./props";

export const H1 = ({ centered, children }: HeadingProps) => {
  return (
    <h1
      className={`${
        centered ? "text-center" : ""
      } scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
    >
      {children}
    </h1>
  );
};
