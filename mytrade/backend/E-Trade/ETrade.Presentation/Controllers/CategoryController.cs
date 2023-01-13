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
    [Route("api/categories")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService service;

        public CategoryController(ICategoryService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetAllCategoryList()
        {
            return Ok(service.GetCategoriesList());
        }
        [HttpPost]
        public IActionResult AddCategory([FromBody] CategoryDto categoryDto)
        {
            categoryDto.CategoryStatus = true;
            service.AddCategory(categoryDto);
            return Ok(categoryDto);
        }
        [HttpGet("{id}")]
        public IActionResult GetOneCategory([FromRoute(Name = "id")] int id)
        {
            var category = service.GetCategoryById(id);
            return Ok(category);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory([FromRoute] int id)
        {
            service.DeleteCategory(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateCategory([FromRoute] int id, [FromBody] Category category)
        {
            category.CategoryStatus = true;
            return Accepted(service.UpdateCategory(category, id));
        }
        [HttpGet("getlastcategory")]
        public IActionResult GetLastCategory()
        {
            return Ok(service.LastCategory().Where(x=>x.CategoryStatus==true));
        }
        [HttpGet("popularcategory")]
        public IActionResult PopularCategory()
        {
            return Ok(service.GetCategoriesList().Where(x => x.CategoryId == 1001 || x.CategoryId == 1 || x.CategoryId == 2 || x.CategoryId == 7 && x.CategoryStatus==true).ToList());
        }
        [HttpGet("categoryactive/{id:int}")]
        public IActionResult CategroryActive([FromRoute(Name ="id")]int id)
        {
            var status = service.GetCategoryById(id);
            status.CategoryStatus = true;
            return Ok(Accepted(service.UpdateCategory(status, id)));
        }
        [HttpGet("categorypassive/{id:int}")]
        public IActionResult CatgoryPassive([FromRoute(Name = "id")]int id)
        {
            var status =service.GetCategoryById(id);
            status.CategoryStatus= false;
            return Ok(Accepted(service.UpdateCategory(status, id)));
        }
      
    }
}
