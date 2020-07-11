import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getPublicPlaceDetails(form: NgForm){
    return this.http.get(`${environment.API}${form.control.get('cep').value}/json`);
  }
}
