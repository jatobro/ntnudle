type PageBodyProps = {
  children?: React.ReactNode;
};

export const PageBody = ({ children }: PageBodyProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 flex justify-center flex-1 items-center">
      {children}
    </div>
  );
};
