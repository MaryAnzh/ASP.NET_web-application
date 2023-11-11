using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public async Task<Contact[]> Get()
    {
        var contacts = await ContactContext.Contacts
            .AsNoTracking()
            .ToArrayAsync();
        return contacts;
    }

    [HttpGet("{id:int}")]
    public async Task<Contact?> Get(int id)
    {
        var contact = await ContactContext.Contacts
        .Where(c => c.Id == id)
        .AsNoTracking()
        .FirstOrDefaultAsync();

        return contact;
    }

    [HttpPost]
    public async Task<Contact> Post([FromBody] Contact item)
    {
        ContactContext.Contacts.Add(item);
        await ContactContext.SaveChangesAsync();
        return item;
    }

    [HttpPut]
    public async Task<Contact> Put([FromBody] Contact item)
    {
        ContactContext.Contacts.Update(item);
        await ContactContext.SaveChangesAsync();

        // var ContactToUpdate = ContactContext.Contacts.FirstOrDefaultAsync(c => c.Id == item.Id);
        // if (await TryUpdateModelAsync(ContactToUpdate))
        // {
        //     //ContactContext.Contacts.Update(item);
        //     await ContactContext.SaveChangesAsync();
        // }
        return item;
    }

    [HttpDelete("{id:int}")]
    public async Task Delete(int id)
    {
        var elem = await ContactContext.Contacts.Where(c => c.Id == id).FirstOrDefaultAsync();
        if (elem != null)
        {
            ContactContext.Contacts.Remove(elem);
            await ContactContext.SaveChangesAsync();
        }
    }
}