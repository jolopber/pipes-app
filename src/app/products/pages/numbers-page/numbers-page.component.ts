import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    CommonModule
  ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells: number = 25669796.7778;
  public percent: number = 0.6778;


}
