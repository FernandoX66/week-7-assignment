import { Attribute } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

export class PasswordValidators {
  static mustMatch(c: AbstractControl): ValidationErrors | null {
    const password: AbstractControl | null = c.root.get('password');
    const passwordConfirmation: AbstractControl = c;

    if (passwordConfirmation.value === null) {
      return null;
    }

    if (password) {
      const subscription: Subscription = password.valueChanges.subscribe(() => {
        passwordConfirmation.updateValueAndValidity();
        subscription.unsubscribe;
      });
    }

    if (password && password.value !== passwordConfirmation.value) {
      return { mustMatch: true };
    } else {
      return null;
    }
  }
}
