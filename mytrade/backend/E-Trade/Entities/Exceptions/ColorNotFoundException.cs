namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class ColorNotFoundException : NotFoundException
        {
            public ColorNotFoundException(int  id) : base($"Color with {id} could not found")
            {
            }
        }

    }
}
