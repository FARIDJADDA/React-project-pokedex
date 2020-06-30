import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";

const PokemonSearch: FunctionComponent = () => {
  const [term, setTerm] = useState<string>(""); // sauvegarde le term de recherche saisit par l'user
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // stockage de pokemon, correspondant au term de recherche

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);

    if (term.length <= 1) {
      // verifie si le term fait au moins 2 character de long
      setPokemons([]);
      return;
    }

    PokemonService.searchPokemon(term).then((pokemons) =>
      setPokemons(pokemons)
    );
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={term}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="collection">
              {pokemons.map((
                pokemon // list de pokemon qui responsond au term de recherche
              ) => (
                <Link
                  key={pokemon.id}
                  to={`/pokemons/${pokemon.id}`}
                  className="collection-item"
                >
                  {pokemon.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearch;
