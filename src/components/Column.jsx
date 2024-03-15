import Card from "./Card";

export default function Column({ tasks, stage }) {
  return (
    <div className="py-3 px-1.5 m-1 bg-lime-800 rounded-lg w-1/5">
      <h2 className="text-lg font-bold text-white">Stage: {stage + 1}</h2>
      <ul className="my-2">
        {tasks.map((task) => (
          <Card task={task} key={task.id}/>
        ))}
      </ul>
    </div>
  );
}
