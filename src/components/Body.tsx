type PageBodyProps = {
  children?: React.ReactNode;
};

export const Body = ({ children }: PageBodyProps) => {
  return (
    <main className="bg-white dark:bg-slate-800 flex flex-col flex-1 h-screen gap-4 p-10 justify-around items-center">
      {children}
    </main>
  );
};
