import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { FIRST_STAGE, LAST_STAGE } from "../utils/constants";

export default function Card({ task }) {
  const { name, description, stage, id } = task;
  const onStageChange = useContext(DataContext);

  return (
    <div>
      <h3>{name}</h3>
      <span>{description}</span>
      <div>
        {stage !== LAST_STAGE && (
          <button onClick={() => onStageChange(stage, id, true)}>
            Upgrade
          </button>
        )}
        {stage !== FIRST_STAGE && (
          <button onClick={() => onStageChange(stage, id, false)}>
            Downgrade
          </button>
        )}
      </div>
    </div>
  );
}
