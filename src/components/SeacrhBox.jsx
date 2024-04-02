import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContext";

export default function SearchBox() {
  const inputRef = useRef("");
  const { onSearch, onResetSearch } = useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(inputRef.current.value);
  }

  function handleReset(e) {
    e.preventDefault();
    onResetSearch();
  }

  return (
    <form
    className="py-3"
      onSubmit={(e) => handleSubmit(e)}
      onReset={(e) => {
        handleReset(e);
      }}
    >
      <input className="h-8 rounded p-2 border-2 border-orange-400" ref={inputRef} placeholder="Search here..." />
      <button
        type="submit"
        className="bg-orange-400 text-base px-2 py-1 m-1 rounded font-semibold text-white hover:bg-lime-700"
      >
        Search
      </button>
      <button
        type="reset"
        className="bg-orange-400 text-base px-2 py-1 m-1 rounded font-semibold text-white hover:bg-lime-700"
      >
        Reset
      </button>
    </form>
  );
}
