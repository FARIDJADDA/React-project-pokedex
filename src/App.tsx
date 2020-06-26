import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PokemonEdit from "./pages/pokemon-edit";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonList from "./pages/pokemon-list";
import PageNotFound from "./pages/page-not-found";
import PokemonsAdd from "./pages/pokemon-add";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* la barre de navigation commun à toutes les pages */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        {/* Le système de gestion des routes de notre application */}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/pokemons/add" component={PokemonsAdd} />
          <Route path="/pokemons/edit/:id" component={PokemonEdit} />
          <Route path="/pokemons/:id" component={PokemonsDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
