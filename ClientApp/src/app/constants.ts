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
export const errorMessage = {
  empty: `this field shouldn't be empty`,
  minLength: (min: number) => `Length should be more then ${min}`,
  phoneLength: (num: number) => `Length should be ${num} numbers`,
  onlyNumber: `Please typing only number`,
  age: 'age should be more then 16 and lass 116 years',
}
