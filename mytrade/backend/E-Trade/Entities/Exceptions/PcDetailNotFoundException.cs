namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class PcDetailNotFoundException : NotFoundException
        {
            public PcDetailNotFoundException(int id) : base($"Pc detail with {id} could not found")
            {
            }
        }
    }
}
