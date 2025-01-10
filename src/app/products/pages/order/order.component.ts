import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    PanelModule,
    CommonModule,
    ToggleCasePipe
    
    
  ],
  templateUrl: './order.component.html',
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent { }
