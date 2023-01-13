using Entities.Dtos;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface ICategoryService
    {
        List<Category> GetCategoriesList(Expression<Func<Category, bool>> filter=null);
        Category GetCategoryById(int id);
        Category AddCategory(CategoryDto categoryDto);
        Category UpdateCategory(Category category,int id);
        void DeleteCategory(int id);
        List<Category> LastCategory();
    }
}
