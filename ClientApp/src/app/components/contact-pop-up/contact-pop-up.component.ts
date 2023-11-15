import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { IContact, ICreateContact, ModeInfo, PopUpMode } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contactsService/contacts.service';
import { CustomValidators } from 'src/app/utile/CustomValidators';
import { formValidateData, FormField, errorMessage, formsPlaceholder } from 'src/app/constants';


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
  public formValidateData = formValidateData;
  public errorMessage = errorMessage;
  public formsPlaceholder = formsPlaceholder;

  constructor(
    private contactService: ContactsService
  ) { }

  ngOnInit(): void {
    this.newContactForm = new FormGroup({
      [FormField.name]: new FormControl('', [
        Validators.required,
        Validators.minLength(this.formValidateData[FormField.name].min),
        Validators.maxLength(this.formValidateData[FormField.name].max)
      ]),
      [FormField.phone]: new FormControl('', [
        Validators.required,
        Validators.minLength(this.formValidateData[FormField.phone].min),
        Validators.maxLength(this.formValidateData[FormField.phone].max),
        Validators.pattern(/^[0-9]+$/)
      ]),
      [FormField.job]: new FormControl('', [
        Validators.required,
        Validators.minLength(this.formValidateData[FormField.job].min),
        Validators.maxLength(this.formValidateData[FormField.job].max),
      ]),
      [FormField.birthDate]: new FormControl('', [
        Validators.required,
        CustomValidators.dateValidators()
      ]),
    });

    if (this.mode?.contact) {
      const date = new Date(this.mode.contact.birthDate).toISOString().slice(0, 10);

      this.name.setValue(this.mode.contact.name);
      this.phone.setValue(this.mode.contact.mobilePhone);
      this.job.setValue(this.mode.contact.jobTitle);
      this.birthDate.setValue(date);
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

  submit() {
    const contact: ICreateContact = {
      name: this.newContactForm.value.name,
      mobilePhone: this.newContactForm.value.phone,
      jobTitle: this.newContactForm.value.job,
      birthDate: this.newContactForm.value.birthDate,
    }

    switch (this.mode?.mode) {
      case PopUpMode.create:
        this.contactService.createContact(contact);
        break;
      case PopUpMode.edit:
        this.updateContact(contact);
        break;
    }
    this.close();
  }

  updateContact(contact: ICreateContact) {
    if (this.mode?.contact) {
      const bogy: IContact = { ...contact, id: this.mode.contact.id };
      this.contactService.updateContact(bogy);
    }
  }

  close(): void {
    this.contactService.closePopUp();
  }

  numberCheckerOnInput(): void {
    const reg = /^[0-9]+$/;
    const value = this.phone.value[this.phone.value.length - 1];
    if (!reg.test(value)) {
      const checkedValue = this.phone.value.replace(value, '');
      this.phone.setValue(checkedValue);
    }
  }
}
