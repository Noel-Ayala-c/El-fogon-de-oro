import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postre',
  imports: [],
  templateUrl: './postre.component.html',
  styleUrl: './postre.component.css'
})
export class PostreComponent {
    constructor(private router: Router) {}
  
    irACarta() {
      this.router.navigate(['/carta']);
    }
    irABebidas(){
      this.router.navigate(['/bebidas'])
    }
    irAlDashboard(){
      this.router.navigate(['/dashboard'])
    }
    irALogin(){
      this.router.navigate(['/login'])
    }
    irABoleta(){
      this.router.navigate(['/boleta'])
    }
}
