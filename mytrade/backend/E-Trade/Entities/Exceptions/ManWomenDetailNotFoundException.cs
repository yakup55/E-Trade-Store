namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class ManWomenDetailNotFoundException : NotFoundException
        {
            public ManWomenDetailNotFoundException(int id) : base($"Man Women detail with {id} could not found")
            {
            }
        }
    }
}