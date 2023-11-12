import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IContact, ICreateContact } from '../../interfaces/contact.interface';
import { responseUrl } from '../../constants';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = `${baseUrl}${responseUrl}`;
  }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.baseUrl);
  }

  getContactById(id: number): Observable<IContact> {
    return this.http.get<IContact>(`${this.baseUrl}/${id}`);
  }

  createContact(body: ICreateContact): Observable<IContact> {
    return this.http.post<IContact>(this.baseUrl, body);
  }

  updateContact(body: IContact): Observable<IContact> {
    return this.http.put<IContact>(this.baseUrl, body);
  }

  deleteContact(id: string): Observable<IContact> {
    return this.http.delete<IContact>(`${this.baseUrl}/${id}`);
  }
}
