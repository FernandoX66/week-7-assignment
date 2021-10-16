import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DateValidators } from 'src/app/validators/date.validators';
import { siteValidators } from 'src/app/validators/site.validators';
import { TelephoneValidators } from 'src/app/validators/telephone.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, DateValidators.minDate]],
      telephone: ['', [Validators.required, TelephoneValidators.numbersOnly]],
      personalSite: ['', siteValidators.urlType],
      genre: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      terms: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get lastName(): AbstractControl | null {
    return this.form.get('lastName');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  get passwordConfirmation(): AbstractControl | null {
    return this.form.get('passwordConfirmation');
  }

  get dateOfBirth(): AbstractControl | null {
    return this.form.get('dateOfBirth');
  }

  get telephone(): AbstractControl | null {
    return this.form.get('telephone');
  }

  get personalSite(): AbstractControl | null {
    return this.form.get('personalSite');
  }
}
