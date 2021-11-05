using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autenticacao.Services
{
    public class UsuarioService
    {

        public string EncriptarSenha(string senha)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(senha);
            return passwordHash;
        }

        public bool VerificarSenha(string senha,string hash)
        {
            bool descript = BCrypt.Net.BCrypt.Verify(senha, hash);
            return descript;
        }
    }
}
