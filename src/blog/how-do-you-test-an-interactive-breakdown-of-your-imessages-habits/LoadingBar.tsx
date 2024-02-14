import React from "react";

let i = 0; // initial state

let STATES = [
  "Start",
  "Loading file",
  "Reading file",
  "Loading SQL",
  "Creating database",
  "Calculating SMS percentage",
  "Calculating popular chats",
  "Calculating popular group chats",
  "Calculating attachments",
  "Done",
];

type LoadingBarProps = {
  state: number;
};

export const LoadingBar = (props: LoadingBarProps) => {
  const { state } = props;
  return (
    <div>
      <h1>Loading...</h1>
      <div className="w-full border-black border-2 p-1">
        <div className="bg-black h-10 border" style={{ width: `${(state / STATES.length) * 100 + 5}%` }}></div>
      </div>
      <p> {STATES[state]} </p>
    </div>
  );
};