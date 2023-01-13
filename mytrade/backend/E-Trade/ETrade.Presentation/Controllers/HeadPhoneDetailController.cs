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
    [Route("api/headphonedetail")]
    public class HeadPhoneDetailController:ControllerBase
    {
        private readonly IHeadPhoneDetailService service;

        public HeadPhoneDetailController(IHeadPhoneDetailService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetHeadPhoneList()
        {
            return Ok(service.GetHeadPhoneList());
        }
        [HttpPost]
        public IActionResult AddHeadPhone([FromBody] HeadPhoneDetailDto dto)
        {
            service.HeadPhoneAdd(dto);
            return Ok(dto);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneHeadPhone([FromRoute(Name ="id")]int id)
        {
            var one=service.GetOneHeadPhone(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteHeadPhone([FromRoute] int id)
        {
            service.HeadPhoneDelete(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateHeadPhone([FromBody] ProductDetailHeadPhone dto, [FromRoute] int id)
        {
            return Accepted(service.HeadPhoneUpdate(id, dto));
        }
    }
}
