import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactService } from 'src/services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private contactService: ContactService,
    private _snackBar: MatSnackBar) { }


  isCallingApi: boolean = false;
  isSubmited: boolean = false;
  name = '';
  email = '';
  description = '';

  @ViewChild('txtName') txtName?: ElementRef;
  @ViewChild('txtEmail') txtEmail?: ElementRef;
  @ViewChild('txtDescription') txtDescription?: ElementRef;

  sendForm() {
    this.isCallingApi = true;
    this.contactService.sendContactForm({
      name: this.txtName!.nativeElement.value,
      email: this.txtEmail!.nativeElement.value,
      description: this.txtDescription!.nativeElement.value
    }).subscribe(output => {
      this.isCallingApi = false;
      if (output.status) {
        this.name = this.txtName!.nativeElement.value,
        this.email = this.txtEmail!.nativeElement.value,
        this.description = this.txtDescription!.nativeElement.value,

        this.isSubmited = true;
        this._snackBar.open(output.message!, 'dissmiss', {
            duration: 3000
          })
      }
    });
  }
}
