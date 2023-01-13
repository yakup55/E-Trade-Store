namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class NumberNotFoundException : NotFoundException
        {
            public NumberNotFoundException(int id) : base($"Number with {id} could not found")
            {
            }
        }
    }
}
