namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class SizeNotFoundException : NotFoundException
        {
            public SizeNotFoundException(int id) : base($"Size with {id} could not found")
            {
            }



        }
    }
}
