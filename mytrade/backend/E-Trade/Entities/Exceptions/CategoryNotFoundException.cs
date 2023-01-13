namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class CategoryNotFoundException : NotFoundException
        {
            public CategoryNotFoundException(int id) : base($"Category with {id} could not found")
            {
            }
        }

       
    }
}
