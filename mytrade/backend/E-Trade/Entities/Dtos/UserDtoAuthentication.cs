using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public record UserDtoAuthentication
    {
        [Required(ErrorMessage ="User Name is required")]
        public string? UserName { get; init; }

        [Required(ErrorMessage ="Password is required")]
        public string? UserPassword { get; init; }
    }
}
