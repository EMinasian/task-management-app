import Column from "./Column";

export default function TaskDisplay({ data }) {
  return (
    <ol className="flex flex-row">
      {data.map((tasks, stage) => (
        <Column tasks={tasks} stage={stage} key={stage} />
      ))}
    </ol>
  );
}
