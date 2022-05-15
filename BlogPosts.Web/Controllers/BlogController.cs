using BlogPosts.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPosts.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private string _connectionString;

        public BlogController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<BlogPost> GetAll()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetBlogs();
        }

        
        
        [HttpPost]
        [Route("addblog")]
        public void AddBlog(BlogPost blogPost)
        {
            blogPost.Date = DateTime.Now;
            var repo = new BlogPostRepository(_connectionString);
            repo.AddBlog(blogPost);
        }

        [HttpPost]
        [Route("addcomment")]
        public void AddComment(Comment comment)
        {
            comment.Date = DateTime.Now;
            var repo = new BlogPostRepository(_connectionString);
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getblogbyid")]
        public BlogPost GetBlogById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GeBlogById(id);
        }

        [HttpGet]
        [Route("getcommentsbyid")]
        public List<Comment> GetCommentsById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetCommentsById(id);
        }


        [HttpGet]
        [Route("getpaginated")]
        public List<BlogPost> GetPaginated(int skip, int take)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetPaginatedBlogPosts(skip,take);
        }

        [HttpGet]
        [Route("getnewestid")]
        public BlogPost GetNewestId()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetNewestId();
        }

    }
}
