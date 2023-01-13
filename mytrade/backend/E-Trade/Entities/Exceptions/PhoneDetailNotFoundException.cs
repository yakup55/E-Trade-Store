namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class PhoneDetailNotFoundException : NotFoundException
        {
            public PhoneDetailNotFoundException(int id) : base($"Phone detail with {id} could not found")
            {
            }
        }
    }

}