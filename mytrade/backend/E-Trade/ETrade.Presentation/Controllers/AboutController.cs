using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETrade.Presentation.Controllers
{
    [ApiController]
    [Route("api/abouts")]
    public class AboutController:ControllerBase
    {
        private readonly IAboutService service;

        public AboutController(IAboutService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetAboutList()
        {
            return Ok(service.GetAboutList());
        }
        [HttpGet("getlastabout")]
        public IActionResult GetLastAbout()
        {
            return Ok(service.GetLastAbout());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneAbout([FromRoute(Name ="id")]int id)
        {
            var one =service.GetAboutById(id);
            return Ok(one); 
        }
        [HttpPost]
        public IActionResult AddAbout([FromBody] About about)
        {
            service.AddAbout(about);
            return Ok(about);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteAbout([FromRoute]int id)
        {
            service.DeleteAbout(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateAbout([FromBody]About about, [FromRoute]int id)
        {
            return Accepted(service.UpdateAbout(about, id));
        }
    }
}
