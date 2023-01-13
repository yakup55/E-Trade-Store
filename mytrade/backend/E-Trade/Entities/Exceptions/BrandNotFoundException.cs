namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class BrandNotFoundException : NotFoundException
        {
            public BrandNotFoundException(int id) : base($"Brand with {id} could not found")
            {
            }
        }
    }
}
