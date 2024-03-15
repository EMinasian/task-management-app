import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContext";

export default function SearchBox() {
  const inputRef = useRef("");
  const { onSearch } = useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(inputRef.current.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input ref={inputRef} placeholder="Search here..." />
      <button type="submit">Search</button>
    </form>
  );
}
