import React from "react";

function ImageContainer({ image }) {
  return (
    <div>
      <img className="pokemon-image" src={image} />
    </div>
  );
}

export default ImageContainer;
