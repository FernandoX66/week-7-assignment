import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get('../../assets/json/countries.json');
  }

  getStates(): Observable<any> {
    return this.http.get('../../assets/json/states.json');
  }
}
