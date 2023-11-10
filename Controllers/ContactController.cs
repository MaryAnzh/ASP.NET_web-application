using Microsoft.AspNetCore.Mvc;

namespace test_task_vm.Controllers;

[ApiController]
[Route("[controller]")]
public class ContactsController : ControllerBase
{
    private ILogger<ContactsController> Logger { get; }
    private ContactContext ContactContext { get; }

    public ContactsController(ILogger<ContactsController> logger, ContactContext contactContext)
    {
        Logger = logger;
        ContactContext = contactContext;
    }

    [HttpGet]
    public IEnumerable<Contact> Get()
    {
        return ContactContext.Contacts;
    }

    [HttpGet("{id:int}")]
    public Contact? Get(int id)
    {
        return ContactContext.Contacts.Where(c => c.Id == id).FirstOrDefault();
    }

    [HttpPost]
    public void Post([FromBody] Contact item)
    {
        ContactContext.Contacts.Add(item);
        ContactContext.SaveChanges();
    }
    [HttpPut]
    public void Put([FromBody] Contact item)
    {
        ContactContext.Contacts.Update(item);
        ContactContext.SaveChanges();
    }

    [HttpDelete("{id:int}")]
    public void Delete(int id)
    {
        var elem = ContactContext.Contacts.Where(c => c.Id == id).FirstOrDefault();
        if (elem != null)
        {
            ContactContext.Contacts.Remove(elem);
            ContactContext.SaveChanges();
        }
    }

}