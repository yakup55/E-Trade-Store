using Entities.Dtos;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ETrade.Presentation.Controllers
{
    [ApiController]
    [Route("api/comments")]
    public class CommentController:ControllerBase
    {
        private readonly ICommentService service;

        public CommentController(ICommentService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetCommentList()
        {
            return Ok(service.GetCommentList());
        }
        [HttpGet("{id}")]
        public IActionResult GetOneComment([FromRoute(Name ="id")]int id)
        {
            return Ok(service.GetOneComment(id));
        }
        [HttpGet("oneCommentProduct/{id:int}")]
        public IActionResult OneCommentProduct([FromRoute(Name ="id")]int id)
        {
            return Ok(service.GetCommentList().Where(x=>x.ProductId==id && x.CommentStatus==true).ToList());
        }
        [HttpPost]
        public IActionResult AddComment([FromBody] CommentDto comment)
        {
            comment.CommentStatus = false;
            return Ok(service.AddComment(comment));
        }
        [HttpPut("{id}")]
        public IActionResult UpdateComment([FromBody]Comment comment,[FromRoute]int id)
        {
            return Ok(Accepted(service.UpdateComment(comment, id)));
        }
        [HttpGet("commetactive/{id:int}")]
        public IActionResult CommentActive([FromRoute(Name = "id")]int id)
        {
            var status = service.GetOneComment(id);
            status.CommentStatus = true;
            return Ok(Accepted(service.UpdateComment(status,id)));
        }
        [HttpGet("commentpassive/{id:int}")]
        public IActionResult CommentPassive([FromRoute(Name ="id")]int id)
        {
            var status = service.GetOneComment(id);
            status.CommentStatus = false;
            return Ok(Accepted(service.UpdateComment(status, id)));
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteComment([FromRoute]int id)
        {
            service.DeleteComment(id);
            return NoContent();
        }
    }
}
