import React from "react";
import "./App.css";

function DescriptionContainer({ name, type, moves, weight }) {
  const arr = [
    "Grand",
    "Imposing",
    "Dignified",
    "Splendid",
    "Noble",
    "Glorious",
    "Magnificent",
    "Majestical",
    "Statuesque",
    "Impressive",
    "Elegant",
    "Sumptuous",
    "Sovereign",
    "Munificent",
    "Baronial",
    "Exalted",
  ];
  const randomValue = Math.floor(Math.random() * arr.length);
  const randomValuePicker = arr[randomValue];

  const outputWeight = weight >= 200 ? `HUGE ${weight}` : `tiny ${weight}`;

  return (
    <div className="description-container">
      <h1 className="description-header">Description</h1>
      <p className="description-text">
        This {randomValuePicker} Pokemon is named {name.toUpperCase()}
        <br />
        <br /> {name.toUpperCase()} is the type of: {type.toUpperCase()}.
        <br />
        <br /> {name.toUpperCase()} is capable of learning {moves} different
        moves.
        <br />
        <br /> {name.toUpperCase()} weighs a {outputWeight} pounds!
      </p>
    </div>
  );
}

export default DescriptionContainer;
