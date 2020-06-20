import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";

import "./pokemon-card.css";

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({
  pokemon,
  borderColor = "#009688",
}) => {
  const [color, setColor] = useState<String>("");

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBoder = () => {
    setColor("#f5f5f5"); // on remet la border en gris.
  };
  return (
    <div
      className="col s6 m4"
      onMouseEnter={showBorder}
      onMouseLeave={hideBoder}
    >
      <div className="card horizontal" style={{ borderColor: borderColor }}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{pokemon.created.toString()}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
