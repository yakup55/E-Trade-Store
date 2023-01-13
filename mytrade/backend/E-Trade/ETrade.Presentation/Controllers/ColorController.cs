using Entities.Dtos;
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
    [Route("api/colors")]
    public class ColorController:ControllerBase
    {
        private readonly IColorService service;

        public ColorController(IColorService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetColorList()
        {
            return Ok(service.GetColorList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneColor([FromRoute(Name ="id")]int id)
        {
         var one =  service.GetOneByColor(id);
            return Ok(one);
        }
        [HttpPost]
        public IActionResult AddColor([FromBody] ColorDto color)
        {
            return Ok(service.AddColor(color));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteColor([FromRoute]int id)
        {
            service.DeleteColor(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateColor([FromBody] Color color, [FromRoute]int id)
        {
            return Accepted(service.UpdateColor(color, id));
        }
    }
}
