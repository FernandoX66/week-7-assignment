import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DateValidators {
  static minDate(c: AbstractControl): ValidationErrors | null {
    const currentDate: Date = new Date();
    const userDate: Date = new Date(c.value);
    let isDateValid: boolean = false;

    if (userDate.getFullYear() === currentDate.getFullYear()) {
      if (userDate.getMonth() === currentDate.getMonth()) {
        if (userDate.getDate() < currentDate.getDate()) {
          isDateValid = true;
        }
      } else if (userDate.getMonth() < currentDate.getMonth()) {
        isDateValid = true;
      }
    } else if (userDate.getFullYear() < currentDate.getFullYear()) {
      isDateValid = true;
    }

    if (isDateValid) {
      return null;
    } else {
      return { minDate: true };
    }
  }
}
