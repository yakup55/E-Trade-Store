namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class HeadPhoneDetailNotFoundException : NotFoundException
        {
            public HeadPhoneDetailNotFoundException(int id) : base($"Head Phone detail with {id} could not found")
            {
            }
        }
    }
}
