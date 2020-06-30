import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PokemonEdit from "./pages/pokemon-edit";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonList from "./pages/pokemon-list";
import PageNotFound from "./pages/page-not-found";
import PokemonsAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

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
          <PrivateRoute exact path="/" component={PokemonList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons" component={PokemonList} />
          <PrivateRoute path="/pokemons/add" component={PokemonsAdd} />
          <PrivateRoute path="/pokemons/edit/:id" component={PokemonEdit} />
          <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
