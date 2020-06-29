import React, { FunctionComponent, useState } from "react";

import PokemonForm from "../components/pokemon-form";

import Pokemon from "../models/pokemon";

const PokemonsAdd: FunctionComponent = () => {
  const [id] = useState<number>(new Date().getTime()); // ientifiant unique pour le new pokemon (get time 1er janvier 1970)
  const [pokemon] = useState<Pokemon>(new Pokemon(id)); // new pokemon vierge

  console.log(Pokemon);

  return (
    <div className="row">
      <h2 className="header center">Ajouter un pokemon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
    </div>
  );
};

export default PokemonsAdd;
