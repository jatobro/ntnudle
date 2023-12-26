import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children = "" }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-green-500">
      <NavBar />
      <main className="bg-red-500">{children}</main>
      <Footer />
    </div>
  );
};
