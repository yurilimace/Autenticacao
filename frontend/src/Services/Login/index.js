import { base_API } from "../axios";

export async function Login(usuario) {
  return await base_API.post("usuario", usuario);
}

export async function CriarNovoUsuario(usuario) {
  return await base_API.post("usuario/criarusuario");
}
