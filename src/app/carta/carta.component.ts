import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {

  constructor(private router: Router) {}

  irAlDashboard() {
    this.router.navigate(['/dashboard']);
  }
  irABebidas(){
    this.router.navigate(['/bebidas'])
  }
  irAPostre(){
    this.router.navigate(['/postre'])
  }
  irALogin(){
    this.router.navigate(['/login'])
  }
  irABoleta(){
    this.router.navigate(['/boleta'])
  }
}
