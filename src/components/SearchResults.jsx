import Card from "./Card";

export default function SearchResults({ searchedTasks }) {
  return (
    <>
      {searchedTasks.length ? (
        <ul>
          {searchedTasks.map((task) => (
            <Card key={task.id} task={task} isSearchResult />
          ))}
        </ul>
      ) : (
        <span>No results found!</span>
      )}
    </>
  );
}
