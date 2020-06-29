import Pokemon from "../models/pokemon";

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
  // ----------------PUT-REQUEST-----------------------------

  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "PUT", // type de la requete à envoyer
      body: JSON.stringify(pokemon), // defini le corp de la requete (transofrme un objet en chaine de character stringify)
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }
  // ----------------DELETE-REQUEST------------------------------

  static deletePokemon(pokemon: Pokemon): Promise<{}> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  // ----------------POST-REQUEST---------------------------------

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    delete pokemon.created;
    return fetch(`http://localhost:3001/pokemons`, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  //  ------------------------------------------------------------

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}
