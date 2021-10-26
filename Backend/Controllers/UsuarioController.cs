using Autenticacao.Context;
using Autenticacao.Entidade;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<UsuarioController> Post([FromBody] Usuario usuario)
        {
            return Ok(new { mensagem = "Get Funcionado" });
        }

        [HttpPost("criarusuario")]
        public  ActionResult CriarUsuario([FromBody] Usuario usuario)
        {
            _context.Add(usuario);
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<UsuarioController>> GetUsuario()
        {
            var lista = await _context.Usuarios.ToListAsync();
            return  Ok(new { mensagem = "Get Funcionado",data = lista });
        }

        
    }
}
