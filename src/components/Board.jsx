import { useState } from "react";
import Column from "./Column";
import categorizeData from "../utils/categorizeData";
import data from "../mocks/data";
import "../../src/globals.css"

export default function Board() {
  const [categorizedData, setData] = useState(categorizeData(data));
  return (
    <div className="board">
        <h2>Tasks Board</h2>
      <ol className="columns-section">
        {categorizedData.map((tasks, stage) => (
          <Column tasks={tasks} stage={stage} key={stage}/>
        ))}
      </ol>
    </div>
  );
}
