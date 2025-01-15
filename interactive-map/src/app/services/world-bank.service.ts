import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorldBankService {
  private baseUrl = 'https://api.worldbank.org/v2';
  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    const url = `${this.baseUrl}/country?format=json`;
    return this.http.get(url)
  }

  getCountryData(code: string): Observable<any> {
    const url = `${this.baseUrl}/country/${code}?format=json`;
    return this.http.get(url)
  }
}
