using Entities.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Context
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public DbSet<About>? Abouts { get; set; }
        public DbSet<Category>? Categories { get; set; }
        public DbSet<Color>? Colors { get; set; }
        public DbSet<Size>? Sizes { get; set; }
        //public DbSet<Users>? Users { get; set; }
        public DbSet<Comment>? Comments { get; set; }
        public DbSet<Gender>? Genders { get; set; }
        public DbSet<Product>? Products { get; set; }
        public DbSet<ProductDetails>? ProductDetails { get; set; }
        public DbSet<ProductComment>? ProductComments { get; set; }
        public DbSet<Number>? Numbers { get; set; }
        public DbSet<Contact>? Contacts { get; set; }
        public DbSet<ProductDetailWatch>? ProductDetailWatches { get; set; }
        public DbSet<ProductDetailTv>? ProductDetailTvs { get; set; }
        public DbSet<ProductDetailPhone>? ProductDetailPhones { get; set; }
        public DbSet<ProductDetailPc>? ProductDetailPcs { get; set; }
        public DbSet<ProductDetailManWomen>? ProductDetailManWomens { get; set; }
        public DbSet<ProductDetailHeadPhone>? ProductDetailHeadPhones { get; set; }
        public DbSet<Brand>? Brands { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public AppDbContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=MSI;Initial Catalog=E-Trade;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
