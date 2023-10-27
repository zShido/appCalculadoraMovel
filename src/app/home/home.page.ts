import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor : string = '0';
  valor1! : number;
  valor2! : number;
  operacao! : number;
  constructor() {}

  adicionarNumero(valor: string){
    if((this.visor.length == 1) && (this.visor == '0')){
    this.visor = valor;
  }else{
    this.visor += valor;
    }
  }

  adicionarPonto(valor: string){
    this.visor += valor;
  }

  adicionarOperacao(valor : number){
    this.operacao = valor;
    this.valor1 = +this.visor;
    /*this.valor1 = Number(this.visor);  Outra forma de transformar string em number */
    this.zerar();
  }

  porcentagem(){
    this.valor1 = +this.visor;
    this.visor = "" + (this.valor1 /100);
  }
  
  calcular(){
    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0 : {
        this.visor = "" + (this.valor1 + this.valor2);
        break;
      }
      case 1 : {
        this.visor = "" + (this.valor1 - this.valor2);
        break;
      }

      case 2 : {
        this.visor = "" + (this.valor1 * this.valor2);
        break;
      }

      case 3 : {
        this.visor = "" + (this.valor1 / this.valor2);
        break;
      }
    }
    this.valor1=0;
    this.valor2=0;
    this.operacao=0
  }

  trocaSinal(){
    this.visor = "" + (Number(this.visor) * -1)
  }

  zerar(){
    this.visor = '0';
  }
  
}