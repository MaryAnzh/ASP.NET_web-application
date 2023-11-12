import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact, ModeInfo, PopUpMode, PopUpStatus } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  @Input() contact: IContact | undefined = undefined;
  @Input() number: number | undefined;
  public isPopUpOpen$: Observable<PopUpStatus>;
  private editMode: PopUpMode = PopUpMode.edit;

  constructor(
    private contactService: ContactsService
  ) {
    this.isPopUpOpen$ = this.contactService.isContactPopUpOpen$;
  }

  editContact() {
    if (this.contact) {
      const modInfo: ModeInfo = {
        mode: this.editMode,
        contact: this.contact,
      }
      this.contactService.showPopUp(modInfo);
    }
  }

  delete() {
    if (this.contact) {
      this.contactService.deleteContact(this.contact.id);
    }
  }
}
