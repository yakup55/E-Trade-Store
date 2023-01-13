using Entities.Dtos;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using static Entities.Exceptions.NotFoundException;

namespace ETrade.Presentation.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService service;

        public ProductController(IProductService service)
        {
            this.service = service;
        }
        [HttpGet("getlastproduct")]
        public IActionResult GetLastProduct()
        {

            return Ok(service.GetLastProduct().Where(x => x.ProductStatus == true).ToList());
        }
        [HttpGet]
        public IActionResult GetProductList()
        {
            return Ok(service.GetProductList().Where(x => x.ProductStatus == true).ToList());
        }
        [HttpGet("getlistbystring")]
        public IActionResult GetListByString(string product)
        {
            if (!string.IsNullOrEmpty(product))
            {
                return Ok(service.GetListByString(product));
            }
            return null;

        }
        [HttpPost]
        public IActionResult AddProduct([FromBody] ProductDto product)
        {
            product.ProductStatus = true;
            service.AddProduct(product);
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct([FromRoute] int id)
        {
            service.DeleteProduct(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateProduct([FromBody] Product product, [FromRoute] int id)
        {
            product.ProductStatus = true;
            return Accepted(service.UpdateProduct(product, id));
        }
        [HttpGet("{id}")]
        public IActionResult GetOneProduct([FromRoute(Name = "id")] int id)
        {
            var one = service.GetOneProduct(id);
            return Ok(one);
        }
        [HttpGet("getallproductwithdetaillist")]
        public IActionResult GetAllProductWithDetailList()
        {
            return Ok(service.GetAllProductWithDetailList().Where(x => x.CategoryId == 1).ToList());
        }
        [HttpGet("getoneproductwithdetail/{id:int}")]
        public IActionResult GetOneProductWithDetail([FromRoute(Name = "id")] int id)
        {
            return Ok(service.GetOneProductWithDetail(id));
        }
        [HttpGet("productcategory/{id:int}")]
        public IActionResult ProductCategory([FromRoute(Name = "id")] int id)
        {
            return Ok(service.GetProductList().Where(x => x.CategoryId == id && x.ProductStatus == true));
        }
        [HttpGet("productbrand/{id:int}")]
        public IActionResult ProductBrand([FromRoute(Name = "id")] int id)
        {
            return Ok(service.ProductBrand(id));
        }
        [HttpGet("popularproduct")]
        public IActionResult PopularProduct()
        {
            return Ok(service.PopularProductList());
        }
        [HttpGet("productactive/{id:int}")]
        public IActionResult ProductActive([FromRoute(Name = "id")] int id)
        {
            var status = service.GetOneProduct(id);
            status.ProductStatus = true;
            return Ok(Accepted(service.UpdateProduct(status, id)));
        }
        [HttpGet("productpassive/{id:int}")]
        public IActionResult ProductPassive([FromRoute(Name = "id")] int id)
        {
            var status = service.GetOneProduct(id);
            status.ProductStatus = false;
            return Ok(Accepted(service.UpdateProduct(status, id)));
        }
        [HttpGet("productpricesinking")]
        public IActionResult ProductPriceSinking()
        {
            return Ok(service.ProductPriceSinking());
        }
        [HttpGet("productpricegrowing")]
        public IActionResult ProductPriceGrowing()
        {
            return Ok(service.ProductPriceGrowing());
        }
        [HttpGet("productlist2/{id:int}")]
        public IActionResult ProductList2([FromRoute] int id)
        {
            return Ok(service.ProductList2(id));
        }
        [HttpGet("productcategorylist/{id:int}")]
        public IActionResult ProductCategoryList([FromRoute] int id)
        {
            return Ok(service.ProductCategoryList(id));
        }
        [HttpGet("productcolorlist/{id:int}")]
        public IActionResult ProductColorList([FromRoute(Name = "id")] int id)
        {
            return Ok(service.ProductColorList(id));
        }
        [HttpGet("productnumberlist/{id:int}")]
        public IActionResult ProductNumberList([FromRoute] int id)
        {
            return Ok(service.ProductNumberList(id));



        }
        [HttpGet("productsizelist/{id:int}")]
        public IActionResult ProductSizeList([FromRoute] int id)
        {
            return Ok(service.ProductSizeList(id));
        }
        [HttpGet("productprice1")]
        public IActionResult ProductPrice1List()
        {
            return Ok(service.ProductPrice1());
        }
        [HttpGet("productprice2")]
        public IActionResult ProductPrice2List()
        {
            return Ok(service.ProductPrice2());
        }
        [HttpGet("productprice3")]
        public IActionResult ProductPrice3List()
        {
            return Ok(service.ProductPrice3());
        }
        [HttpGet("productprice4")]
        public IActionResult ProductPrice4List()
        {
            return Ok(service.ProductPrice4());
        }
    }
}
