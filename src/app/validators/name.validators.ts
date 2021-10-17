import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidators {
  static capitalLetter(c: AbstractControl): ValidationErrors | null {
    if (
      (c.value as string).charAt(0) ===
      (c.value as string).charAt(0).toUpperCase()
    ) {
      return null;
    } else {
      return { capitalLetter: true };
    }
  }
}
