namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class WacthDetailNotFoundException : NotFoundException
        {
            public WacthDetailNotFoundException(int id) : base($"Watch detail with {id} could not found")
            {
            }
        }
    }
}