import React,{useContext,useState,useEffect} from "react";
import { Route,Redirect } from "react-router";
import UsuarioContext from "../../Context/userContext";
import jwt_decode from "jwt-decode";
const RotaProtegida = ({ ...rest }) => {
  // posteriormente inserir logica de token para acesso da rota
  const {usuarioInfo,setUsarioInfoContext} = useContext(UsuarioContext)
  const [userToken,setUserToken] = useState(false)
  
  const VerificarUsuarioContext =  () => {
    if(usuarioInfo == null){
      const token =  localStorage.getItem('userToken')
      if(token){
        console.log("entrou ")
        setUsarioInfoContext(token)
      }
    }
   
  }

  const VerificarAcessoARota = (usuarioInfo) => {
      console.log(usuarioInfo,"<------- valor context")
      if(usuarioInfo !== null && usuarioInfo.role === 'gerente'){
        return true
      }
      return false
  }

  useEffect(()=>{
    console.log("roda primeiro")
    VerificarUsuarioContext()
   
  },[])


  return(
   <>
    {
        VerificarAcessoARota(usuarioInfo) === true ? <Route {...rest} /> :  <Redirect from="" to="/login" />
    }
   
   </>
  )
};

export default RotaProtegida;
