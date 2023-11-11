import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/services/httpService/http-service.service';
import { IContact } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent {
  @Output() public contacts: IContact[] = [];

  constructor(private contactService: ContactsService) { }
}
