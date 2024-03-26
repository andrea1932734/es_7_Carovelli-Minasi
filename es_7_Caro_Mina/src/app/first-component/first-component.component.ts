import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})

export class FirstComponentComponent {
 pokemon = [
  {nome: "Anna", numero: "000", controllo: false},

  {nome: "Bob", numero: "111",controllo: false},

  {nome: "Charlie", numero: "222",controllo: false},

  {nome: "Dana", numero: "333",controllo: false},

  {nome: "AB", numero: "333",controllo: false},

  {nome: "CD", numero: "333",controllo: false},

 ]

bottone(pokemon:{nome: string}){
  if (pokemon.nome == "Anna"){
    this.pokemon[0].controllo = true
  }else if (pokemon.nome == "Bob"){
    this.pokemon[1].controllo = true
  }else if (pokemon.nome == "Charlie"){
    this.pokemon[2].controllo = true
  }else if (pokemon.nome == "Dana"){
    this.pokemon[3].controllo = true
  }else if (pokemon.nome == "AB"){
    this.pokemon[4].controllo = true
  }else if (pokemon.nome == "CD"){
    this.pokemon[5].controllo = true
  }
}

indietro(){
  this.pokemon[0].controllo = false
  this.pokemon[1].controllo = false
  this.pokemon[2].controllo = false
  this.pokemon[3].controllo = false
  this.pokemon[4].controllo = false
  this.pokemon[5].controllo = false
}

}
