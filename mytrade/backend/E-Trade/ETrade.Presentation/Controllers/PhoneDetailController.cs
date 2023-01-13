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
    [Route("api/phonedetail")]
    public class PhoneDetailController:ControllerBase
    {
        private readonly IPhoneDetailService service;

        public PhoneDetailController(IPhoneDetailService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetPhoneList()
        {
            return Ok(service.GetPhoneList());
        }
        [HttpPost]
        public IActionResult AddPhone([FromBody] PhoneDetailDto dto)
        {
            service.PhoneAdd(dto);
            return Ok(dto);
        }
        [HttpGet("{id}")]
        public IActionResult GetOnePhone([FromRoute(Name ="id")]int id)
        {
            var one=service.GetOnePhone(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeletePhone([FromRoute] int id)
        {
            service.PhoneDelete(id); return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdatePhone([FromBody] ProductDetailPhone dto, [FromRoute]int id)
        {
            return Accepted(service.PhoneUpdate(id,dto));
        }
    }
}
