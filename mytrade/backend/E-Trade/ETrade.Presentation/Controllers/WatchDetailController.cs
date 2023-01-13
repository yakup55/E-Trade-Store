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
    [Route("api/wactdetail")]
    public class WatchDetailController:ControllerBase
    {
        private readonly IWatchDetailService service;

        public WatchDetailController(IWatchDetailService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetWacthList()
        {
            return Ok(service.GetWacthList());
        }
        [HttpPost]
        public IActionResult AddWacth([FromBody] WacthDetailDto dto)
        {
            service.WatchAdd(dto);
            return Ok(dto);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneWacth([FromRoute(Name ="id")] int id)
        {
            var one=service.GetOneWacth(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteWacth([FromRoute] int id)
        {
            service.WatchDelete(id);    
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateWacth([FromRoute]int id, [FromBody] ProductDetailWatch dto)
        {
            return Ok(Accepted(service.WatchUpdate(id, dto)));
        }
    }
}
