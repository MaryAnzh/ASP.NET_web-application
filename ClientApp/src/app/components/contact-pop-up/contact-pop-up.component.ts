import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { ModeInfo, PopUpStatus } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';

enum FormField {
  name = 'name',
  phone = 'phone',
  job = 'job',
  birthDate = 'birthDate'
}

@Component({
  selector: 'app-contact-pop-up',
  templateUrl: './contact-pop-up.component.html',
  styleUrls: ['./contact-pop-up.component.scss']
})

export class ContactPopUpComponent implements OnInit {
  @Input() public mode: ModeInfo | undefined = undefined;
  public newContactForm: FormGroup = new FormGroup({});
  public formField = {
    name: FormField.name,
    phone: FormField.phone,
    job: FormField.job,
    birthDate: FormField.birthDate
  }

  constructor(
    private contactService: ContactsService
  ) { }

  ngOnInit(): void {
    if (this.mode?.contact) {
      const date = new Date(this.mode.contact.birthDate).toISOString().slice(0, 10);

      this.newContactForm = new FormGroup({
        [FormField.name]: new FormControl(this.mode.contact.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32)
        ]),
        [FormField.phone]: new FormControl(this.mode.contact.mobilePhone, [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
        ]),
        [FormField.job]: new FormControl(this.mode.contact.jobTitle, [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(50),
        ]),
        [FormField.birthDate]: new FormControl(date, [
          Validators.required,
        ]),
      });
    } else {
      this.newContactForm = new FormGroup({
        [FormField.name]: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32)
        ]),
        [FormField.phone]: new FormControl('', [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
        ]),
        [FormField.job]: new FormControl('', [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(50),
        ]),
        [FormField.birthDate]: new FormControl('', [
          Validators.required,
        ]),
      });
    }
  }

  get name(): AbstractControl {
    return <AbstractControl>this.newContactForm.get(FormField.name);
  }
  get phone(): AbstractControl {
    return <AbstractControl>this.newContactForm.get(FormField.phone);
  }
  get job(): AbstractControl {
    return <AbstractControl>this.newContactForm.get(FormField.job);
  }
  get birthDate(): AbstractControl {
    return <AbstractControl>this.newContactForm.get(FormField.birthDate);
  }


  close(): void {
    this.contactService.closePopUp();
  }
}
