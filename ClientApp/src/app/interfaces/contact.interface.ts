export interface IContact {
  id: string;
  name: string;
  mobilePhone: string;
  jobTitle: string;
  birthDate: Date;
}

export interface ICreateContact {
  name: string;
  mobilePhone: string;
  jobTitle: string;
  birthDate: Date;
}
