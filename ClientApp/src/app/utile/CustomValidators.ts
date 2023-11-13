import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

class CustomValidators {

  static dateValidators(): ValidatorFn {
    const sixteenYearInMS = +new Date('2020-01-01') - +new Date('2004-01-01');
    const oneHundredYearsInMS = +new Date('2000-01-01') - +new Date('1900-01-01');

    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.value;

      const result = {
        date: (value: string): boolean =>
          Date.now() - Date.parse(value) < sixteenYearInMS
           || Date.now() - Date.parse(value) > (oneHundredYearsInMS),
      }

      const isValid = result.date(controlValue);

      return isValid ? { date: true } : null
    }
  }
}

export { CustomValidators };
