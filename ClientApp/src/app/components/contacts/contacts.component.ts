import { Component } from '@angular/core';
import { HttpService } from 'src/app/httpService/http-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  constructor(httpService: HttpService) {
    httpService.getContacts();
  }
}
