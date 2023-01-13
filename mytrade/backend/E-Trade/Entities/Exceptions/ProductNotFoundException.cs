namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class ProductNotFoundException : NotFoundException
        {
            public ProductNotFoundException(int id) : base($"Product with {id} could not found")
            {
            }
        }

    }
}
