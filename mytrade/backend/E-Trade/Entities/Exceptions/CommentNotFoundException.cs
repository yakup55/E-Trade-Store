namespace Entities.Exceptions
{
    public partial class NotFoundException
    {
        public class CommentNotFoundException : NotFoundException
        {
            public CommentNotFoundException(int id) : base($"Comment with {id} could not found")
            {
            }
        }
    }
}
