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
  {nome: "Anna", numero: "000"},

  {nome: "Bob", numero: "111"},

  {nome: "Charlie", numero: "222"},

  {nome: "Dana", numero: "333"},

  {nome: "Dana", numero: "333"},

  {nome: "Dana", numero: "333"},

 ]
}
