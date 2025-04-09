import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boleta',
  imports: [],
  templateUrl: './boleta.component.html',
  styleUrl: './boleta.component.css'
})
export class BoletaComponent {
  constructor(private router: Router) {}

  irAlDashboard() {
    this.router.navigate(['/dashboard']);
  }

  irALogin(){
    this.router.navigate(['/login'])
  }
}
