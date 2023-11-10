using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class ContactContext : DbContext
{
    public DbSet<Contact> Contacts { get; set; }
    public string DbPath { get; }

    public ContactContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "contact.db");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}

public class Contact
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? MobilePhone { get; set; }
    public string? JobTitle { get; set; }

    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }
}