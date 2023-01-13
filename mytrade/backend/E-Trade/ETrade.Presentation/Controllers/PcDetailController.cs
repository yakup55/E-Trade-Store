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
    [Route("api/pcdetail")]
    public class PcDetailController:ControllerBase
    {
        private readonly IPcDetailService service;

        public PcDetailController(IPcDetailService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetPcList()
        {
            return Ok(service.GetPcList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOnePc([FromRoute(Name ="id")]int id)
        {
            var one=service.GetOnePc(id);
            return Ok(one);
        }
       
        [HttpPost]
        public IActionResult PcAdd([FromBody] PcDetailDto pc)
        {
            service.PcAdd(pc);
            return Ok(pc); 
        }
        [HttpDelete("{id}")]
        public IActionResult DeletePc([FromRoute]int id)
        {
            service.PcDelete(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdatePc([FromRoute] int id, [FromBody] ProductDetailPc pc)
        {
            return Ok(Accepted(service.PcUpdate(id, pc)));
        }
    }
}
