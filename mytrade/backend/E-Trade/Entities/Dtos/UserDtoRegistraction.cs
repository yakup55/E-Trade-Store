using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public record UserDtoRegistraction
    {
        public string? UserFirstName { get; init; }
        public string? UserLastName { get; init; }
        [Required(ErrorMessage = "User Name is Required")]
        public string? UserUserName { get; init; }

        [Required(ErrorMessage = "Password is Required")]
        public string? UserPassword { get; init; }
        public string? UserEmail { get; init; }
        public string? UserPhoneNumber { get; init; }

        public ICollection<string>? Roles { get; init; }
    }
}
