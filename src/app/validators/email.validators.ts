import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
  static emailType(c: AbstractControl): ValidationErrors | null {
    const emailPattern: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isEmailValid = emailPattern.test(c.value);

    if (c.value) {
      if (isEmailValid) {
        return null;
      } else {
        return { emailType: true };
      }
    } else {
      return null;
    }
  }
}
