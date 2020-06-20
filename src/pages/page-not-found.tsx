import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import logo from "../media/dracaufeu.png";

const PageNotFound: FunctionComponent = () => {
  return (
    <div className="center">
      <img src={logo} alt="Page non trouvée" style={{ width: "40%" }} />
      <h1>Hey, cette page n'existe pas !</h1>
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default PageNotFound;
