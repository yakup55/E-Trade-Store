using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ETrade.Presentation.Controllers
{
    [ApiController]
    [Route("api/contacts")]
    public class ContactController:ControllerBase
    {
        private readonly IContactService service;

        public ContactController(IContactService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetContactList()
        {
            return Ok(service.GetContactList());
        }
        [HttpPost]
        public IActionResult AddContact([FromBody]Contact contact)
        {
            service.AddContact(contact);
            return Ok(contact);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateContact([FromBody]Contact contact, [FromRoute]int id)
        {
            return Ok(Accepted(service.UpdateContact(contact, id)));
        }
        [HttpGet("{id}")]
        public IActionResult GetOneContact([FromRoute(Name ="id")]int id)
        {
            var one = service.GetContactById(id);
            return Ok(one);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteContact([FromRoute(Name ="id")]int id)
        {
            service.DeleteContact(id);
            return NoContent();
        }
    }
}
