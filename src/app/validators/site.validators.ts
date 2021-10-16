import { AbstractControl, ValidationErrors } from '@angular/forms';

export class siteValidators {
  static urlType(c: AbstractControl): ValidationErrors | null {
    const sitePattern: RegExp =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const isSiteValid = sitePattern.test(c.value);

    if (c.value !== '') {
      if (isSiteValid) {
        return null;
      } else {
        return { urlType: true };
      }
    } else {
      return null;
    }
  }
}
