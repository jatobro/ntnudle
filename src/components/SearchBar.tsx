type SearchBarProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      className="bg-white dark:bg-slate-200 border-blue border-4 rounded-lg font-2xl text-2xl p-2 w-5/6"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
