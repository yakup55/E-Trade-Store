using Entities.Dtos;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETrade.Presentation.Controllers
{
    [ApiController]
    [Route("api/manwomendetail")]
    public class ManWomenDetailController : ControllerBase
    {
        private readonly IManWomenDetailService service;

        public ManWomenDetailController(IManWomenDetailService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetManWomenList()
        {
            return Ok(service.GetManWomenList());
        }
        [HttpPost]
        public IActionResult AddManWomen([FromBody] ManWomenDetailDto dto)
        {
            service.ManWomenAdd(dto);
            return Ok(dto);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneManWomen([FromRoute(Name ="id")]int id)
        {
            var one=service.GetOneManWomen(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteManWomen([FromRoute]int id)
        {
            service.ManWomenDelete(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateManWomen([FromBody]ProductDetailManWomen dto, [FromRoute]int id)
        {
            return Accepted(service.ManWomenUpdate(id, dto));
        }
    }
}
