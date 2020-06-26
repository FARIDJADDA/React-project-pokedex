import React, { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../models/pokemon";
import PokemonCard from "../components/Pokemon-card";
import PokemonService from "../services/pokemon-service";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="card-action">
          <Link
            className="btn-floating btn-large waves-effect waves-light red z-deph-3"
            to={`/pokemons/add`}
            style={{ position: "fixed", bottom: "25px", right: "25px" }}
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
