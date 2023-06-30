import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    constructor(private router: Router){}

    ngOnInit(): void {
        
    }

    RedirectHome() {
        this.router.navigate(['/Home']); // Ruta para redirigir al componente OtroComponente
      }

}