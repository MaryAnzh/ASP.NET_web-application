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

export enum PopUpMode { create = 'create', edit = "edit" };
export type ModeInfo = {
  mode: PopUpMode,
  contact?: IContact
}
export type PopUpStatus = ModeInfo | false;

