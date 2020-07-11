import { cep } from './interfaces/cep';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CepService } from './services/cep/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private cep: cep;

  constructor(private cepService: CepService){}

  onSubmit(form: NgForm){
    console.log(form);
    this.cepService.getPublicPlaceDetails(form).subscribe((response: cep) => this.cep = response);
  }
}
