import { useState } from "react";
import Column from "./Column";
import categorizeData from "../utils/categorizeData";
import data from "../mocks/data";
import { DataContextProvider } from "../contexts/DataContext";
import "../../src/globals.css";

export default function Board() {
  const [categorizedData, setData] = useState(categorizeData(data));

  function onStageChange(stage, id, isUpgrade) {
    let taskToChange;
    let locationOfTask;

    for (let i = 0; i < categorizedData[stage - 1].length; i++) {
      const task = categorizedData[stage - 1][i]
      if (task.id === id) {
        taskToChange = task;
        locationOfTask = i;
        break;
      }
    }

    categorizedData[stage - 1].splice(locationOfTask, 1);
    taskToChange.stage++;
    const newStage = isUpgrade ? stage : stage - 2
    categorizedData[newStage].push(taskToChange);
    setData([...categorizedData]);
  }

  return (
    <DataContextProvider value={onStageChange}>
      <div className="board">
        <h2>Tasks Board</h2>
        <ol className="columns-section">
          {categorizedData.map((tasks, stage) => (
            <Column tasks={tasks} stage={stage} key={stage} />
          ))}
        </ol>
      </div>
    </DataContextProvider>
  );
}
