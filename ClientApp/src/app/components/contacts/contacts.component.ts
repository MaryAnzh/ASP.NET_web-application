import { Component, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/app/services/httpService/http-service.service';
import { IContact } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent {
  @Input() public contacts$: Observable<IContact[] | null>;
  public isPopUpOpen$: Observable<boolean>;

  constructor(private contactService: ContactsService) {
    this.contacts$ = this.contactService.contacts$;
    this.isPopUpOpen$ = this.contactService.isContactPopUpOpen$;
  }

  trackByFn(index: number, contact: IContact) {
    return contact.id;
  }
}
