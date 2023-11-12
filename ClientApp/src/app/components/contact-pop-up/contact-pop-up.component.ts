import { Component, Input } from '@angular/core';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';

@Component({
  selector: 'app-contact-pop-up',
  templateUrl: './contact-pop-up.component.html',
  styleUrls: ['./contact-pop-up.component.scss']
})

export class ContactPopUpComponent {
  constructor(
    private contactService: ContactsService
  ) { }

  close() {
    this.contactService.closePopUp();
  }
}
