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
    [Route("api/tvdetail")]
    public class TvDetailController:ControllerBase
    {
        private readonly ITvDetailService service;

        public TvDetailController(ITvDetailService service)
        {
            this.service = service;
        }

        [HttpGet] 
        public IActionResult GetTvList() 
        { 
            return Ok(service.GetTvList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneDetail([FromRoute(Name ="id")]int id)
        {
            var one=service.GetOneTv(id); return Ok(one);
        }
        [HttpPost]
        public IActionResult AddTv([FromBody]TvDetailDto dto)
        {
            service.TvAdd(dto);
            return Ok(dto);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteTv([FromRoute]int id)
        {
            service.TvDelete(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateTv([FromBody]ProductDetailTv dto, [FromRoute] int id)
        {
            return Accepted(service.TvUpdate(id, dto));
        }
    }
}
