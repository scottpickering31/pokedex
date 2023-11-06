import React, {useState, useEffect} from "react";
import "./App.css";
import { makeApiRequest } from "./PokeApiCall";

function AbilitiesContainer() {

  const [moves, setMoves] = useState([]);

  useEffect(() => {
    makeApiRequest()
      .then((apiData) => {
        setMoves(apiData.moves.map(move => move.move.name));
      })
      .catch((error) => {
        console.error("Error in MoveList.js:", error);
      });
  }, []);
  return (
    <>
      <div className="abilities-container">
        <h1 className="abilities-header">Abilities</h1>
        <ul className="moves">
        {moves.map((move, index) => (
          <li key={index}>{move.charAt(0).toUpperCase() + move.slice(1)}</li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default AbilitiesContainer;
