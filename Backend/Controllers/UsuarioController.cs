using Autenticacao.Context;
using Autenticacao.Entidade;
using Autenticacao.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autenticacao.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration; 

        public UsuarioController(AppDbContext context,IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        public ActionResult<UsuarioController> Post([FromBody] Usuario usuario)
        {
            
            var usuarioBanco = _context.Usuarios.FirstOrDefault(u => u.Email == usuario.Email);
            var tokenGerado = new TokenService(_configuration).GerarToken(usuarioBanco);

            return Ok(new { mensagem = "Login Funcionado",Token = tokenGerado });
        }

        [HttpPost("criarusuario")]
        public  ActionResult CriarUsuario([FromBody] Usuario usuario)
        {

            var senhaEncriptada = new UsuarioService().EncriptarSenha(usuario.Senha);
            usuario.Senha = senhaEncriptada;
            _context.Add(usuario);
            _context.SaveChanges();
            return Ok(new{messagem="Cadastro Efetuado com sucesso" });
        }

        [HttpGet]
        public async Task<ActionResult<UsuarioController>> GetUsuario()
        {
            var lista = await _context.Usuarios.ToListAsync();
            return  Ok(new { mensagem = "Get Funcionado",data = lista });
        }

        
    }
}
