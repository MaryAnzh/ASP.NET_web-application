export const responseUrl = 'contacts';

export const contactHeader = ['Count', 'Name', 'Phone', 'Job', 'Birthday', 'Edit', 'Delete'];

export enum FormField {
  name = 'name',
  phone = 'phone',
  job = 'job',
  birthDate = 'birthDate'
}

export const formValidateData = {
  [FormField.name]: { min: 3, max: 30 },
  [FormField.phone]: { min: 12, max: 12 },
  [FormField.job]: { min: 3, max: 50 },
}
