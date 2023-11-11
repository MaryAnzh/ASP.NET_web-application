import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IContact } from '../../interfaces/contact.interface';
import { responseUrl } from '../../constants';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.baseUrl + responseUrl);
  }
}
