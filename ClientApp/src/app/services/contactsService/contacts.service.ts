import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IContact, ICreateContact } from 'src/app/interfaces/contact.interface';
import { HttpService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  private _contacts$$ = new Subject<IContact[] | null>();
  public contacts$ = this._contacts$$.asObservable();

  private isContactPopUpOpen$$ = new Subject<boolean>();
  public isContactPopUpOpen$ = this.isContactPopUpOpen$$.asObservable();

  constructor(private httpService: HttpService) {
    this.getContacts();
  }

  packetDelete(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.deleteContact(i);
    }
  }

  getContacts(): void {
    this.httpService.getContacts()
      .subscribe({
        next: (value) => this._contacts$$.next(value),
        error: (error) => console.error(error.statusText),
      });
  }

  getContactById(id: number): Observable<IContact> {
    return this.httpService.getContactById(id);
  }

  createContact(contact: ICreateContact): void {
    this.httpService.createContact(contact)
      .subscribe({
        next: () => this.getContacts(),
        error: (error) => console.error(error.statusText),
      });
  }

  updateContact(contact: IContact): void {
    this.httpService.updateContact(contact)
      .subscribe({
        next: () => this.getContacts(),
        error: (error) => console.error(error.statusText)
      });
  }

  deleteContact(id: number): void {
    this.httpService.deleteContact(id)
      .subscribe({
        next: (value) => {
          this.getContacts();
          console.log(value)
        },
        error: (error) => console.error(error.statusText),
      })
  }

  showPopUp() {
    this.isContactPopUpOpen$$.next(true);
  }

  closePopUp() {
    this.isContactPopUpOpen$$.next(false);
  }
}
