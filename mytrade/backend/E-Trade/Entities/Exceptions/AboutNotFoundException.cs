namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class AboutNotFoundException : NotFoundException
        {
            public AboutNotFoundException(int id) : base($"About with {id} could not found")
            {

            }

        }
    }
}
