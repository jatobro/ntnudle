import { useState } from "react";
import { api } from "~/utils/api";

export const SearchBar = () => {
  const { data } = api.programme.getAll.useQuery();

  const [searchQuery, setSearchQuery] = useState("");

  const renderSuggestions = () => {
    const MAX_RENDERS = 7;

    if (data && searchQuery !== "") {
      return data
        .filter(
          (programme) =>
            programme.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            programme.name !== searchQuery,
        )
        .map((programme, idx) =>
          idx <= MAX_RENDERS ? (
            <button
              key={programme.id}
              onClick={() => setSearchQuery(programme.name)}
            >
              {programme.name}
            </button>
          ) : (
            <div key={programme.id}></div>
          ),
        );
    }
    return <div></div>;
  };

  return (
    <div className="flex flex-col w-2/6 h-14 gap-4">
      <form
        className="flex gap-2 max-h-full"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchQuery);
        }}
      >
        <input
          className="bg-white dark:bg-slate-200 border-blue border-4 rounded-lg font-2xl min-w-full min-h-full text-2xl p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="text-7xl flex items-center border-blue border-4 rounded-lg  bg-white justify-center p-2"
          type="submit"
        >
          <>→</>
        </button>
      </form>
      <div className="flex flex-col grow-0">{renderSuggestions()}</div>
    </div>
  );
};
