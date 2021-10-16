import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TelephoneValidators {
  static numbersOnly(c: AbstractControl): ValidationErrors | null {
    const telephonePattern: RegExp = /^[0-9]*$/;
    const isTelephoneValid: boolean = telephonePattern.test(c.value);

    if (isTelephoneValid) {
      return null;
    } else {
      return { numbersOnly: true };
    }
  }
}
