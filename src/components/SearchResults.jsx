import Card from "./Card";

export default function SearchResults({ searchedTasks }) {
  return (
    <ul>
      {searchedTasks.map((task) => (
        <Card key={task.id} task={task} isSearchResult />
      ))}
    </ul>
  );
}
