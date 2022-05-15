using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogPosts.Data
{
    public class BlogPostRepository
    {
        private readonly string _connectionString;

        public BlogPostRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<BlogPost> GetBlogs()
        {
            using var context = new BlogPostContext(_connectionString);
            return context.Blogs.Include(b => b.Comments).OrderByDescending(p => p.Date).ToList();
        }
        public void AddBlog(BlogPost blog)
        {
            using var context = new BlogPostContext(_connectionString);
            context.Blogs.Add(blog);
            context.SaveChanges();
        }

        public void AddComment(Comment comment)
        {
            using var context = new BlogPostContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }

        public BlogPost GeBlogById(int id)
        {
            using var context = new BlogPostContext(_connectionString);
            return context.Blogs.Include(c => c.Comments).FirstOrDefault(p => p.Id == id);
        }
        public List<Comment> GetCommentsById(int id)
        {
            using var context = new BlogPostContext(_connectionString);
            return context.Comments.Where(p => p.BlogPostId == id).ToList();
        }

        public List<BlogPost> GetPaginatedBlogPosts(int skip, int take)
        {
            using var context = new BlogPostContext(_connectionString);

            return context.Blogs.Include(c => c.Comments).OrderByDescending(p => p.Date).Skip(skip).Take(take).ToList();
        }

        public BlogPost GetNewestId()
        {
            using var context = new BlogPostContext(_connectionString);
            return context.Blogs.OrderByDescending(p => p.Date).ToList().First();
        }
    }
}
