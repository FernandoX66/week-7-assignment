import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Countries } from 'src/app/interfaces/countries.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { State } from 'src/app/interfaces/state.interface';
import { states } from 'src/app/interfaces/states.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { DateValidators } from 'src/app/validators/date.validators';
import { EmailValidators } from 'src/app/validators/email.validators';
import { NameValidators } from 'src/app/validators/name.validators';
import { PasswordValidators } from 'src/app/validators/password.validators';
import { siteValidators } from 'src/app/validators/site.validators';
import { TelephoneValidators } from 'src/app/validators/telephone.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  countriesList: Country[] = [];
  statesList: State[] = [];
  filteredStates: State[] = [];

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.form = fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          NameValidators.capitalLetter,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          NameValidators.capitalLetter,
        ],
      ],
      email: ['', [Validators.required, EmailValidators.emailType]],
      password: ['', Validators.required],
      passwordConfirmation: [
        '',
        [Validators.required, PasswordValidators.mustMatch],
      ],
      dateOfBirth: ['', [Validators.required, DateValidators.minDate]],
      telephone: ['', [Validators.required, TelephoneValidators.numbersOnly]],
      personalSite: ['', siteValidators.urlType],
      genre: ['', Validators.required],
      address: fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
      }),
      terms: ['', Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.countriesService
      .getCountries()
      .subscribe(
        (response: Countries) => (this.countriesList = response.countries)
      );

    this.countriesService.getStates().subscribe((response: states) => {
      this.statesList = response.states;
    });
  }

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

  get genre(): AbstractControl | null {
    return this.form.get('genre');
  }

  get country(): AbstractControl | null | undefined {
    return this.form.get('address')?.get('country');
  }

  get state(): AbstractControl | null | undefined {
    return this.form.get('address')?.get('state');
  }

  get terms(): AbstractControl | null {
    return this.form.get('terms');
  }

  filterStates(): void {
    this.filteredStates = this.statesList.filter(
      (state: State) => state.id_country == this.country?.value
    );
  }

  submit(): void {
    console.log(this.form.value);
  }
}
