import { Component, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IContact, ICreateContact, ModeInfo, PopUpMode, PopUpStatus } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';
import { createRandomContact } from 'src/app/testData/testData';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent {
  @Input() public contacts$: Observable<IContact[] | null>;
  public isPopUpOpen$: Observable<PopUpStatus>;
  public createContactMode: PopUpMode = PopUpMode.create;
  private createRandomContact = createRandomContact;
  public isRandomContactsCreate = false;
  public randomContactCount = 5;

  constructor(
    private contactService: ContactsService
  ) {
    this.contacts$ = this.contactService.contacts$;
    this.isPopUpOpen$ = this.contactService.isContactPopUpOpen$;
  }

  trackByFn(index: number, contact: IContact) {
    return contact.id;
  }

  showCreateContactPopUp() {
    const modInfo: ModeInfo = {
      mode: this.createContactMode,
    }

    this.contactService.showPopUp(modInfo);
  }

  createRandomContactList(): void {
    [...Array(this.randomContactCount).keys()].forEach(el => {
      const newContact = this.createRandomContact();
      this.contactService.createContact(newContact);
    });
  }
}
