# React Color Changer

This React project is a simple application that allows users to change the background color of the app by clicking on color buttons. It's a great starting point for beginners learning React or anyone looking to build a fun interactive application.

## Features

- Change background color with the click of a button.
- Customize the color palette easily.
- Clean and simple user interface.

## Technologies Used

- React
- JavaScript
- HTML/CSS

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to see the app in action.

Feel free to explore the code and customize it to fit your needs!

## Code Snippet

```jsx
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function App() {
  const [color, setColor] = useState("red");
  function getColor(event) {
    console.log(event.target.value);
    setColor(event.target.value);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
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
