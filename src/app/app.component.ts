import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from "./shared/components/menu/menu.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ButtonModule,
    SharedModule,
    MenuComponent
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  

     

  title = 'JoSe lOpez';
}
