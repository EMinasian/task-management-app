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
      onSubmit={(e) => handleSubmit(e)}
      onReset={(e) => {
        handleReset(e);
      }}
    >
      <input ref={inputRef} placeholder="Search here..." />
      <button type="submit">Search</button>
      <button type="reset">Reset</button>
    </form>
  );
}
