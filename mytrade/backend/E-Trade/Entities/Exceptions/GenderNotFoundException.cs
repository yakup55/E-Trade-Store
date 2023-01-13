namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class GenderNotFoundException : NotFoundException
        {
            public GenderNotFoundException(int id) : base($"Gender with {id} could not found")
            {
            }
        }
    }
}
