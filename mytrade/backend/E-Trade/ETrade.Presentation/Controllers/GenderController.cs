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
    [Route("api/genders")]
    public class GenderController:ControllerBase
    {
        private readonly IGenderService service;

        public GenderController(IGenderService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetGenderList()
        {
            return Ok(service.GetGenderList());
        }
    }
}
