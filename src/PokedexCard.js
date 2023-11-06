import React, { useState, useEffect } from "react";
import "./App.css";
import { makeApiRequest } from "./PokeApiCall";
import AbilitiesContainer from "./AbilitiesContainer";
import ImageContainer from "./ImageContainer";
import NameContainer from "./NameContainer";
import DescriptionContainer from "./DescriptionContainer";

function PokedexCard() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    makeApiRequest()
      .then((apiData) => {
        const delay = 500;

        setData(apiData);

        setTimeout(() => {
          setIsLoading(false);
        }, delay);
      })
      .catch((error) => {
        console.error("Error in App.js:", error);
        setIsLoading(false);
      });
  };

  const handleGenerateNewPoke = () => {
    setIsLoading(true); // Set isLoading to true when making a new request
    fetchData(); // Call the function to fetch new data
  };

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="outer-container">
        <div className="card">
          <NameContainer name={data.name} id={data.id} />
          <ImageContainer image={data.sprites.front_default} />
        </div>
        <div>
          <button className="generatePokemon" onClick={handleGenerateNewPoke}>
            Generate New Pokemon
          </button>
        </div>
        <div className="description-abilities-container">
          <DescriptionContainer
            name={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            type={data.types[0].type.name}
            moves={data.moves.length}
            weight={data.weight}
          />
          <div className="abilities">
            <AbilitiesContainer moves={data.moves[0].move.name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PokedexCard;
