import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

class CustomValidators {

  static dateValidators(): ValidatorFn {
    const sixteenYearInMS = +new Date('2020-01-01') - +new Date('2004-01-01');

    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.value;

      const result = {
        date: (value: string): boolean => Date.parse(value) > Date.now() - sixteenYearInMS,
      }

      const isValid = result.date(controlValue);

      return isValid ? { date: true } : null
    }
  }
}

export { CustomValidators };
