namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class ProductDetailsNotFoundException : NotFoundException
        {
            public ProductDetailsNotFoundException(int id) : base($"ProductDetail with {id} could not found")
            {
            }
        }

    }
}
