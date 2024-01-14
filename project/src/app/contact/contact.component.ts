import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  isSubmited: boolean = false;
  name = '';
  email = '';
  description = '';

  @ViewChild('txtName') txtName?: ElementRef;
  @ViewChild('txtEmail') txtEmail?: ElementRef;
  @ViewChild('txtDescription') txtDescription?: ElementRef;

  sendForm() {
    this.isSubmited = true;
    this.name = this.txtName?.nativeElement.value;
    this.email = this.txtEmail?.nativeElement.value;
    this.description = this.txtDescription?.nativeElement.value;

  }
}
