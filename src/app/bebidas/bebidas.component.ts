import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  imports: [],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent {
  constructor(private router: Router) {}

  irACarta() {
    this.router.navigate(['/carta']);
  }
  irAlDashboard() {
    this.router.navigate(['/dashboard']);
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
