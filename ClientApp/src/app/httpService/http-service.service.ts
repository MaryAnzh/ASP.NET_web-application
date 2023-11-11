import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';
import { responseUrl } from '../constants';


@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getContacts() {
    this.http.get<IContact[]>(this.baseUrl + responseUrl)
      .subscribe({
        next: (result: IContact[]) => {
          const r = result;
          console.log('result');
          console.log(result);
        },
        error: console.error,
      });
  }
}
