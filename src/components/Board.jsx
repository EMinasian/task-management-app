import { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import SearchBox from "./SeacrhBox";
import SearchResults from "./SearchResults";
import categorizeData from "../utils/categorizeData";
import data from "../mocks/data";
import { DataContextProvider } from "../contexts/DataContext";

export default function Board() {
  const [categorizedData, setData] = useState(categorizeData(data));
  const [searchData, setSearchData] = useState([]);
  const [didSearch, setDidSearch] = useState(false)

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
    const searchRegex = new RegExp(value, 'i');

    for (const stageTasks of categorizedData) {
      for (const task of stageTasks) {
        if (searchRegex.test(task.name) || searchRegex.test(task.description)) {
          tasksToShow.push(task);
        }
      }
    }
    setSearchData(tasksToShow);
    setDidSearch(true)
  }

  function onResetSearch() {
    setSearchData([])
    setDidSearch(false)
  }

  return (
    <DataContextProvider value={{ onStageChange, onSearch, onResetSearch }}>
      <div className="p-3 bg-lime-100">
        <h2 className="text-lime-950 text-3xl font-bold my-2">Tasks Board</h2>
        <SearchBox /> 
        {didSearch ? (
          <SearchResults searchedTasks={searchData} />
        ) : (
          <TaskDisplay data={categorizedData} />
        )}
      </div>
    </DataContextProvider>
  );
}
