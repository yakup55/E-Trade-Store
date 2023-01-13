using AutoMapper;
using Entities.Dtos;
using Entities.Models;
using Repositories.Contracts;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static Entities.Exceptions.NotFoundException;

namespace Services.Manager
{
    public class CategoryManager : ICategoryService
    {
        private readonly ICategoryRepository categoryRepository;
        private readonly IMapper mapper;

        public CategoryManager(ICategoryRepository categoryRepository, IMapper mapper)
        {
            this.categoryRepository = categoryRepository;
            this.mapper = mapper;
        }

        public Category AddCategory(CategoryDto categoryDto)
        {
          
            if (categoryDto is null)
            {
                throw new ArgumentNullException();
            }
            var category=mapper.Map<Category>(categoryDto);
            categoryRepository.Add(category);
            return category;
        }

       

        public void DeleteCategory(int id)
        {
            var delete = GetCategoryById(id);
            categoryRepository.Delete(delete);
        }

        public List<Category> GetCategoriesList(Expression<Func<Category, bool>> filter)
        {
            return categoryRepository.GetList(filter).OrderByDescending(x => x.CategoryId).ToList() ;
        }

        public Category GetCategoryById(int id)
        {
            var category = categoryRepository.GetOne(x => x.CategoryId == id);
            if (category is null)
            {
                throw new CategoryNotFoundException(id);
            }
            return category;
        }

        public List<Category> LastCategory()
        {
            return categoryRepository.LastCategory();
        }

        public Category UpdateCategory(Category category, int id)
        {
           var update = GetCategoryById(id);
            update.CategoryName = category.CategoryName;
            update.CategoryStatus = category.CategoryStatus;
            update.CategoryImage = category.CategoryImage;
            categoryRepository.Update(update);
            return update;
        }

    }
}
