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
    public async Task<IActionResult> Get()
    {
        var contacts = await ContactContext.Contacts
            .AsNoTracking()
            .ToArrayAsync();
        return Ok(contacts);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get(int id)
    {
        var contact = await ContactContext.Contacts
        .Where(c => c.Id == id)
        .AsNoTracking()
        .FirstOrDefaultAsync();
        if (contact != null)
        {
            return Ok(contact);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Contact item)
    {
        ContactContext.Contacts.Add(item);
        await ContactContext.SaveChangesAsync();
        return Ok(item);
    }

    [HttpPut]
    public async Task<IActionResult> Put([FromBody] Contact item)
    {
        ContactContext.Contacts.Update(item);
        await ContactContext.SaveChangesAsync();

        return Ok(item);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var elem = await ContactContext.Contacts.Where(c => c.Id == id).FirstOrDefaultAsync();
        if (elem != null)
        {
            ContactContext.Contacts.Remove(elem);
            await ContactContext.SaveChangesAsync();
            return NoContent();
        }
        else
        {
            return NotFound();
        }
    }
}