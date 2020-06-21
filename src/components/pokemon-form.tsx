import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import formatType from "../helpers/forma-type";

type Props = {
  pokemon: Pokemon;
};

type Field = {
  // modelisation de chaque champs du formulair
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  // repr le formulaire avec les champs disponible
  name: Field;
  hp: Field;
  cp: Field;
  types: Field;
};

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  const [form, setForm] = useState<Form>({
    // champs et donnés du formulair
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  });

  const types: string[] = [
    "Plante",
    "Feu",
    "Eau",
    "Insecte",
    "Normal",
    "Electrik",
    "Poison",
    "Fée",
    "Vol",
    "Combat",
    "Psy",
  ];

  const hasType = (type: string): boolean => {
    // boolean si le type passer en param appartien a un pokemon
    return form.types.value.includes(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name; // nom du champ modifié (*1)
    const fieldValue: string = e.target.value; // new value de l'utilisateur
    const newField: Field = { [fieldName]: { value: fieldValue } }; // on regroupe les modif dans un new objet

    setForm({ ...form, ...newField });
  };

  const selectType = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const checked = e.target.checked; // savoir si la case et coché ou non
    let newField: Field;

    if (checked) {
      // Si l'utilisateur coche un type, on le retire de la liste des types du pokemon
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      // Si l'utilisateur décoche un type, on le retire de la liste des types du pokemon.
      const newTypes: string[] = form.types.value.filter(
        (currentTypes: string) => currentTypes !== type
      );
      newField = { value: newTypes };
    }

    setForm({ ...form, ...{ types: newField } }); // mettre un jour le state
  };

  return (
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-image">
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                style={{ width: "250px", margin: "0 auto" }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    name="name" // (*1)
                    type="text"
                    className="form-control"
                    value={form.name.value} //reccupere la donnée du state
                    onChange={(e) => handleInputChange(e)} // pousse les nouvelles valeur du form dans le state
                  ></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input
                    id="hp"
                    name="hp"
                    type="number"
                    className="form-control"
                    value={form.hp.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input
                    id="cp"
                    name="cp"
                    type="number"
                    className="form-control"
                    value={form.cp.value}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map((type) => (
                    <div key={type} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          id={type}
                          type="checkbox"
                          className="filled-in"
                          value={type}
                          checked={hasType(type)}
                          onChange={(e) => selectType(type, e)}
                        ></input>
                        <span>
                          <p className={formatType(type)}>{type}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
