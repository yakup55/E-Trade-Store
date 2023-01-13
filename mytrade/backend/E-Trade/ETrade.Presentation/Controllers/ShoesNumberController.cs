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
    [Route("api/numbers")]
    public class ShoesNumberController : ControllerBase
    {
        private readonly INumberService service;

        public ShoesNumberController(INumberService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetNumbersList()
        {
            return Ok(service.GetNumbersList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneNumber([FromRoute(Name = "id")] int id)
        {
            return Ok(service.GetOneNumberId(id));
        }
        [HttpPost]
        public IActionResult AddNumber([FromBody] NumberDto dto)
        {
            return Ok(service.AddNumber(dto));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteNumber([FromRoute]int id)
        {
         service.DeleteNumber(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateNumbers([FromBody]Number number, [FromRoute]int id)
        {
            return Accepted(service.UpdateNumber(number, id));
        }
    }
}
