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
    [Route("api/sizes")]
    public class SizeController : ControllerBase
    {
        private readonly ISizeService service;

        public SizeController(ISizeService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetSizeList()
        {
            return Ok(service.GetSizeList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneSize([FromRoute(Name = "id")] int id)
        {
            return Ok(service.GetOneBySizeId(id));
        }
        [HttpPost]
        public IActionResult AddSize([FromBody] SizeDto size)
        {
            var one=(service.AddSize(size));
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteSize([FromRoute]int id)
        {
            service.DeleteSize(id);
            
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateSize([FromBody]Size size, [FromRoute] int id)
        {
            return Accepted(service.UpdateSize(size, id));
        }
    }
}
