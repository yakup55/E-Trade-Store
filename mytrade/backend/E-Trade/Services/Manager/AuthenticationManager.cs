using AutoMapper;
using Entities.Dtos;
using Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Services.Service;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Services.Manager
{
    public class AuthenticationManager : IAuthenticationService
    {
        private readonly IMapper mapper;
        private readonly UserManager<User> manager;
        private readonly IConfiguration configuration;
        private User? users;

        public AuthenticationManager()
        {
                
        }
        public AuthenticationManager(IMapper mapper, UserManager<User> manager, IConfiguration configuration)
        {
            this.mapper = mapper;
            this.manager = manager;
            this.configuration = configuration;
        }

        public async Task<string> CreatToken()
        {
            var signingCredentials = GetSigningCredentials();
            var claims = await GetClaims();
            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }

        public async Task<User> GetOneUser(string username)
        {
          return await manager.FindByNameAsync(username);  
        }

        public async Task<IdentityResult> RegisterResult(UserDtoRegistraction registraction)
        {
            var user=mapper.Map<User>(registraction);
            var result=await manager.CreateAsync(user,registraction.UserPassword);
            if (result.Succeeded)
                await manager.AddToRolesAsync(user, registraction.Roles);
            return result;
        }

        public async Task<bool> ValidateUser(UserDtoAuthentication authentication)
        {
            users = await manager.FindByNameAsync(authentication.UserName);
            var result = (users != null) &&
                await manager.CheckPasswordAsync(users, authentication.UserPassword);
            if (!result)
            {

            }
            return result;  
        }


        private SigningCredentials GetSigningCredentials()
        {
            var jwtSettings = configuration.GetSection("JwtSettings");
            var key = Encoding.UTF8.GetBytes(jwtSettings["secretKey"]);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }
        private async Task<List<Claim>> GetClaims()
        {
            var claims = new List<Claim> { new Claim(ClaimTypes.Name, users.UserName) };
            var roles = await manager.GetRolesAsync(users);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            return claims;
        }
        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials,
          List<Claim> claims)
        {
            var jwtSettings = configuration.GetSection("JwtSettings");
            var tokenOptions = new JwtSecurityToken(
                issuer: jwtSettings["validIssuer"],
                audience: jwtSettings["validAudience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings["expires"])),
                signingCredentials: signingCredentials);
            return tokenOptions;
        }
    }
}
