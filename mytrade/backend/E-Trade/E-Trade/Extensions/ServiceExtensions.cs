using Entities.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using Repositories.EntityFramework;
using Services.Manager;
using Services.Service;
using System.Runtime.CompilerServices;
using System.Text;

namespace E_Trade.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

        }
        public static void ConfigureSqlConnection(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(
                x => x.UseSqlServer(configuration.GetConnectionString("sqlConnection")));
        }
        public static void RegisterToIo(this IServiceCollection services)
        {
            //PRODUCT
            services.AddScoped<IProductService, ProductManager>();
            services.AddScoped<IProductRepository, EFProductRepository>();
            //CATEGORY
            services.AddScoped<ICategoryService, CategoryManager>();
            services.AddScoped<ICategoryRepository, EFCategoryRepository>();
            //ABOUT
            services.AddScoped<IAboutService, AboutManager>();
            services.AddScoped<IAboutRepository, EFAboutRepository>();
            //PRODUCTDETAİL
            services.AddScoped<IProductDetailRepository, EFProductDetailsRepository>();
            services.AddScoped<IProductDetailService, ProductDetailManager>();
            //COLOR
            services.AddScoped<IColorService, ColorManager>();
            services.AddScoped<IColorRepository, EFColorRepository>();
            //SİZE
            services.AddScoped<ISizeService, SizeManager>();
            services.AddScoped<ISizeRepository, EFSizeRepository>();
            //GENDER
            services.AddScoped<IGenderRepository, EFGenderRepository>();
            services.AddScoped<IGenderService, GenderManager>();
            //COMMENT
            services.AddScoped<ICommentRepository, EFCommentRepository>();
            services.AddScoped<ICommentService, CommentManager>();
            //NUMBER SHOES
            services.AddScoped<INumberRepository, EFNumberRepository>();
            services.AddScoped<INumberService, NumberManager>();
            //CONTACT
            services.AddScoped<IContactService, ContactManager>();
            services.AddScoped<IContactRepository, EFContactRepository>();
            ////PC DETAİL
            services.AddScoped<IPcDetailService, PcDetailManager>();
            services.AddScoped<IPcDetailRepository, EFPcDetailRepository>();
            //WACTH DETAİL
            services.AddScoped<IWatchDetailService, WacthDetailManager>();
            services.AddScoped<IWacthDetailRepository, EFWacthDetailRepository>();
            //Tv DETAİL
            services.AddScoped<ITvDetailService, TvDetailManager>();
            services.AddScoped<ITvDetailRepository, EFTvDetailRepository>();
            //HeadPhone DETAİL
            services.AddScoped<IHeadPhoneDetailService, HeadPhonDetailManager>();
            services.AddScoped<IHeadPhoneDetailRepository, EFHeadPhoneDetailRepository>();
            //ManWomen DETAİL
            services.AddScoped<IManWomenDetailService, ManWomenDetailManager>();
            services.AddScoped<IManWomenDetailRepository, EFManWomenDetailRepository>();
            //Phone DETAİL
            services.AddScoped<IPhoneDetailService, PhoneDetailManager>();
            services.AddScoped<IPhoneDetailRepository, EFPhoneDetailRepository>();
            //BRAND
            services.AddScoped<IBrandRepository, EFBrandRepository>();
            services.AddScoped<IBrandService, BrandManager>();

            //AUTHENTİCATİON
            services.AddScoped<IAuthenticationService, AuthenticationManager>();
        }
        //PASSWORD USER YÖNETİMİ
        public static void ConfigureIdentity(this IServiceCollection services)
        {
            var builder = services.AddIdentity<User, IdentityRole>(opt =>
            {
                opt.Password.RequireDigit = true;
                opt.Password.RequireLowercase = false;
                opt.Password.RequireUppercase = false;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequiredLength = 10;
                opt.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();
        }
        public static void ConfigureJWT(this IServiceCollection services, IConfiguration configuration)
        {
            var jwtSettings = configuration.GetSection("JwtSettings");
            var secretKey = jwtSettings["secretKey"];
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtSettings["validIssuer"],
                    ValidAudience = jwtSettings["validAudience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))

                };
            });


        }
    }
}
