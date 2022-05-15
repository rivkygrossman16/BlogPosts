using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogPosts.Data
{
    public class BlogPostContext:DbContext
    {
            private readonly string _connectionString;

            public BlogPostContext(string connectionString)
            {
                _connectionString = connectionString;
            }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(_connectionString);
            }

            public DbSet<BlogPost> Blogs { get; set; }
            public DbSet<Comment> Comments { get; set; }
        }
    }