import { IContact, ICreateContact } from "../interfaces/contact.interface";

const random = (num: number, type: 'ceil' | 'floor') => {
  if (type === 'ceil') {
    return Math.ceil(Math.random() * num);
  } else {
    return Math.floor(Math.random() * num);
  }
}

const nameSet = ['Anna', "Max", 'Alisa', 'Polina', 'Osvald', 'Jun', 'Tom', 'Robert', 'Alex', 'Mark'];
const jobSet = ['frontend developer', 'backend developer', '.Net developer', 'designer', 'manager'];
const randomPhone = (): string => {
  const star = '375';
  const operator = ['29', '33', '25'];
  const randomOperatorNum = random(operator.length, 'floor');
  const randomOperator = operator[randomOperatorNum]
  const numCount = 7;

  const randomNum = [...Array(numCount).keys()].reduce((acc, el) => {
    const rand = random(9, 'floor');
    return acc + rand;
  }, '');
  return star + randomOperator + randomNum;
}

const randomBirthDay = (): Date => {
  const dayInMonth = 31;
  const monthInYear = 12;
  const randomDay = random(dayInMonth, 'ceil');
  const randomMMonth = random(monthInYear, 'ceil');
  const minAge = 18;
  const maxAge = 70;
  const date = new Date();
  const currentYear = date.getFullYear();
  const randomAge = (Math.floor(Math.random() * (maxAge - minAge))) + minAge;
  const randomYear = currentYear - randomAge;

  const dateStr = `${randomMMonth}/${randomDay}/${randomYear}`;
  if (new Date(dateStr).toString() === 'Invalid Date') {
    return randomBirthDay();
  }
  return new Date(dateStr);
}

export const createRandomContact = (): ICreateContact => {
  const name = nameSet[random(nameSet.length, 'floor')];
  const phone = randomPhone();
  const job = jobSet[random(jobSet.length, 'floor')];
  const date = randomBirthDay();
  const contact: ICreateContact = {
    name: name,
    mobilePhone: phone,
    jobTitle: job,
    birthDate: date
  }
  return contact;
}
