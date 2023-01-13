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
    [Route("api/brands")]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService service;

        public BrandController(IBrandService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetBrandList()
        {
            return Ok(service.GetBrandList());
        }
        [HttpPost]
        public IActionResult AddBrand([FromBody] BrandDto brand)
        {
            return Ok(service.AddBrand(brand));
        }
        [HttpGet("{id}")]
        public IActionResult GetOneBrand([FromRoute(Name = "id")] int id)
        {
            var one = service.GetBrandOneById(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteBrand([FromRoute] int id)
        {
            service.DeleteBrand(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateBrand(Brand brand, int id)
        {
        return Accepted(service.UpdateBrand(brand, id));
        }
    }
}
