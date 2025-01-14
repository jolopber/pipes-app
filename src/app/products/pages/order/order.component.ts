import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Color, Hero } from '../../interfaces/hero-interface';
import { TableModule } from 'primeng/table';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { SortByPipe } from '../../pipes/sort-by.pipe';

@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    PanelModule,
    CommonModule,
    ToggleCasePipe,
    ToolbarModule,
    ButtonModule,
    TableModule,
    CanFlyPipe,
    SortByPipe
    
    
  ],
  templateUrl: './order.component.html',
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent { 
  
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    }
  ]


  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }

  isNameSort = true;
  isFlySort = true;
  isColorSort = true;

  toggleNameSort() {
    this.isNameSort = !this.isNameSort;
    this.changeOrder(this.isNameSort ? 'name' : 'nameInsideOut');
  }  

  toggleFlySort() {
    this.isFlySort = !this.isFlySort;
    this.changeOrder(this.isFlySort ? 'canFly' : 'canFlyInsideOut');
  }

  toggleColorSort() {
    this.isColorSort = !this.isColorSort;
    this.changeOrder(this.isColorSort ? 'color' : 'colorInsideOut');
  }

 }
