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
    [Route("api/products/{id}/productdetail")]
    public class ProductDetailController : ControllerBase
    {
        private readonly IProductDetailService service;

        public ProductDetailController(IProductDetailService service)
        {
            this.service = service;
        }

        [HttpGet("{productId:int}")]
        public IActionResult GetOneProductDetail([FromRoute(Name = "productId")] int productId)
        {
           return Ok( service.GetOneProductDetails(productId));
           
        }
        [HttpPost]
        public IActionResult ProductDetailAdd([FromBody] ProductDetailDto product)
        {
            service.DetailAdd(product);
            return Ok(product);
        }
    }
}