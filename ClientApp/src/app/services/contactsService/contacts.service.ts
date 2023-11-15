import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IContact, ICreateContact, ModeInfo, PopUpMode, PopUpStatus } from 'src/app/interfaces/contact.interface';
import { HttpService } from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  private _contacts$$ = new Subject<IContact[] | null>();
  public contacts$ = this._contacts$$.asObservable();

  private isContactPopUpOpen$$ = new Subject<PopUpStatus>();
  public isContactPopUpOpen$ = this.isContactPopUpOpen$$.asObservable();

  constructor(private httpService: HttpService) {
    this.getContacts();
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

  deleteContact(id: string): void {
    this.httpService.deleteContact(id)
      .subscribe({
        next: () => {
          this.getContacts();
        },
        error: (error) => console.error(error.statusText),
      })
  }

  showPopUp(mode: ModeInfo) {
    this.isContactPopUpOpen$$.next(mode);
  }

  closePopUp() {
    this.isContactPopUpOpen$$.next(false);
  }
}
