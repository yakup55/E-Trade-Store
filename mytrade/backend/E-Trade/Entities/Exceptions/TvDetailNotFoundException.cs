namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class TvDetailNotFoundException : NotFoundException
        {
            public TvDetailNotFoundException(int id) : base($"Tv detail with {id} could not found")
            {
            }
        }
    }
}