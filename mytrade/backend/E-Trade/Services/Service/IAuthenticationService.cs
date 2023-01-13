using Entities.Dtos;
using Entities.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IAuthenticationService
    {
        Task<IdentityResult> RegisterResult(UserDtoRegistraction registraction);
        Task<bool> ValidateUser(UserDtoAuthentication authentication);
        Task<string> CreatToken();
        Task<User>GetOneUser(string username);
    }
}
