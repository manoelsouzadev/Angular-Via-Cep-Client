import { NgForm } from '@angular/forms';
import { CepService } from './../../services/cep/cep.service';
import { Component, OnInit } from '@angular/core';
import { cep } from '../../interfaces/cep';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private cep: cep;

  constructor(private cepService: CepService){}

  onSubmit(form: NgForm){
    console.log(form);
    this.cepService.getPublicPlaceDetails(form).subscribe((response: cep) => this.cep = response);
  }

}
