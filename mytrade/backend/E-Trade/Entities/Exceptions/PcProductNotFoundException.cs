namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class PcProductNotFoundException : NotFoundException
        {
            public PcProductNotFoundException(int id) : base($"Pc Details with {id} could not found")
            {
            }
        }
    }
}
