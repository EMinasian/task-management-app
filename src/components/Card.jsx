import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { FIRST_STAGE, LAST_STAGE } from "../utils/constants";

export default function Card({ task, isSearchResult }) {
  const { name, description, stage, id } = task;
  const { onStageChange } = useContext(DataContext);

  return (
    <div className="p-2 m-1 bg-lime-200 rounded-md">
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="text-sm">{description}</span>
      <div className="pt-3">
        {!isSearchResult && stage !== FIRST_STAGE && (
          <button
            className="bg-yellow-400 p-1 m-0.5 rounded text-xs"
            onClick={() => onStageChange(stage, id, false)}
          >
            Downgrade
          </button>
        )}
        {!isSearchResult && stage !== LAST_STAGE && (
          <button
            className="bg-yellow-400 p-1 m-0.5 rounded text-xs"
            onClick={() => onStageChange(stage, id, true)}
          >
            Upgrade
          </button>
        )}
      </div>
    </div>
  );
}
