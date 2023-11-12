import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  @Input() contact: IContact | undefined = undefined;
  @Input() number: number | undefined;
  public isPopUpOpen$: Observable<boolean>;

  constructor(
    private contactService: ContactsService
  ) {
    this.isPopUpOpen$ = this.contactService.isContactPopUpOpen$;
  }

  showPopUp() {
    this.contactService.showPopUp();
  }

  delete() {
    if (this.contact) {
      this.contactService.deleteContact(this.contact.id);
    }
  }
}
