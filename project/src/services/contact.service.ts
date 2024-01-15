import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactFeedbackInterface, contactInterface } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api: string = 'https://angular-test.free.beeceptor.com/api/post';

  constructor(private http: HttpClient) { }

  sendContactForm(data: contactInterface) : Observable<contactFeedbackInterface> {
    return this.http.post(this.api, data) as Observable<contactFeedbackInterface>;
  }
}
