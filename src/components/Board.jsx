import { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import SearchBox from "./SeacrhBox";
import SearchResults from "./SearchResults";
import categorizeData from "../utils/categorizeData";
import data from "../mocks/data";
import { DataContextProvider } from "../contexts/DataContext";

export default function Board() {
  const [categorizedData, setData] = useState(categorizeData(data));
  const [searchData, setSearch] = useState([]);

  function onStageChange(stage, id, isUpgrade) {
    let taskToChange;
    let locationOfTask;

    for (let i = 0; i < categorizedData[stage - 1].length; i++) {
      const task = categorizedData[stage - 1][i];
      if (task.id === id) {
        taskToChange = task;
        locationOfTask = i;
        break;
      }
    }

    categorizedData[stage - 1].splice(locationOfTask, 1);
    taskToChange.stage = isUpgrade
      ? taskToChange.stage + 1
      : taskToChange.stage - 1;
    categorizedData[isUpgrade ? stage : stage - 2].push(taskToChange);
    setData([...categorizedData]);
  }

  function onSearch(value) {
    const tasksToShow = [];
    const searchRegex = new RegExp(value);

    for (const stageTasks of categorizedData) {
      for (const task of stageTasks) {
        if (searchRegex.test(task.name) || searchRegex.test(task.description)) {
          tasksToShow.push(task);
        }
      }
    }
    setSearch(tasksToShow);
  }

  function onResetSearch() {
    setSearch([])
  }

  return (
    <DataContextProvider value={{ onStageChange, onSearch, onResetSearch }}>
      <div>
        <h2>Tasks Board</h2>
        <SearchBox /> 
        {searchData.length !== 0 ? (
          <SearchResults searchedTasks={searchData} />
        ) : (
          <TaskDisplay data={categorizedData} />
        )}
      </div>
    </DataContextProvider>
  );
}
