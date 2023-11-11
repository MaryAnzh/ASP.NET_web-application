import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IContact } from 'src/app/interfaces/contact.interface';
import { HttpService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  private _contacts$$ = new Subject<IContact[] | null>();
  public contacts$ = this._contacts$$.asObservable();

  constructor(private httpService: HttpService) { }

  async getContacts() {
    this.httpService.getContacts()
      .subscribe({
        next: console.log,
        error: console.error,
      });
  }

}
