import { useEffect } from "react";
import { useState } from "react";
import React from "react";
function App() {
  const [color, setColor] = useState("red");
  function getColor(event) {
    console.log(event.target.value);
    setColor(event.target.value);
  }

    // Effect to log the color whenever it changes
   

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* <div>
        <button value={"red"} onClick={() => getColor(event)}>
          Red
        </button>
      </div> */}

      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            value={"red"}
            onClick={() => getColor(event)}
          >
            {" "}
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            value={"blue"}
            onClick={() => getColor(event)}
          >
            {" "}
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            value={"yellow"}
            onClick={() => getColor(event)}
          >
            {" "}
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            value={"green"}
            onClick={() => getColor(event)}
          >
            {" "}
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
