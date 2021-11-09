import logo from "./logo.svg";
import "./App.css";
import GerenciadorRotas from "./Routes";
import UsuarioContext from "../src/Context/userContext";
import { useState } from "react";
import jwt_decode from "jwt-decode";
function App() {
  const [usuarioInfo, setUsuarioInfo] = useState(null);
  const setUsarioInfoContext = (info) => {
    const { email, role, unique_name } = jwt_decode(info);
    setUsuarioInfo({ email, role, unique_name });
    localStorage.setItem("userToken", info);
  };

  return (
    <UsuarioContext.Provider value={{ usuarioInfo, setUsarioInfoContext }}>
      <GerenciadorRotas />
    </UsuarioContext.Provider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
