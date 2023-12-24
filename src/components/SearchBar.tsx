import { useState, type FormEvent } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <form className="w-2/6 h-14 flex flex-row gap-2" onSubmit={handleSubmit}>
      <input
        className="bg-white dark:bg-slate-200 border-blue border-4 rounded-lg font-2xl min-w-full min-h-full text-2xl"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="text-7xl flex items-center border-blue border-4 rounded-lg  bg-white justify-center p-2"
        type="submit"
      >
        <div>→</div>
      </button>
    </form>
  );
};
