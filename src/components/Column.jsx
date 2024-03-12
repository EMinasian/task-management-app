import Card from "./Card";

export default function Column({ tasks, stage }) {
  return (
    <div>
      <h2>Stage: {stage + 1}</h2>
      <ul>
        {tasks.map((task) => (
          <Card task={task} />
        ))}
      </ul>
    </div>
  );
}
