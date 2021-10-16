import React from "react";
import { Route } from "react-router";

const RotaProtegida = ({ ...rest }) => {
  // posteriormente inserir logica de token para acesso da rota

  return <Route {...rest} />;
};

export default RotaProtegida;
