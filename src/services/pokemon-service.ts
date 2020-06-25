import Pokemon from "../models/pokemon";
import { brotliDecompressSync } from "zlib";

export default class PokemonService {
  static getPokemons(): Promise<Pokemon[]> {
    return fetch("http://localhost:3001/pokemons").then((response) =>
      response.json().catch((error) => this.handleError(error))
    );
  }

  static getPokemon(id: number): Promise<Pokemon | null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => (this.isEmpty(data) ? null : data))
      .catch((error) => this.handleError(error));
  }
  // -------------Requete-PUT---------------(modifier un ressource)

  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "PUT", // type de la requete à envoyer
      body: JSON.stringify(pokemon), // defini le corp de la requete (transofrme un objet en chaine de character stringify)
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }
  // ------------------------------------------------------------

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}
