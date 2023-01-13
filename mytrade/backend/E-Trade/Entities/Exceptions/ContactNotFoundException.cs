namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class ContactNotFoundException : NotFoundException
        {
            public ContactNotFoundException(int id) : base($"Contact with {id} could not found")
            {
            }
        }
    }
}
