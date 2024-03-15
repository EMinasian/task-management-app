import Column from "./Column";

export default function TaskDisplay({ data }) {
  return (
    <div className="gap-2.5">
      <ol className="flex flex-row">
        {data.map((tasks, stage) => (
          <Column tasks={tasks} stage={stage} key={stage} />
        ))}
      </ol>
    </div>
  );
}
