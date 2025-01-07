import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [
    PrimeNgModule
  ],
  templateUrl: './menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
        { label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: ['']
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: ['numbers']
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: ['uncommon']
            }
          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Otro elemento',
              icon: 'pi pi-cog'
            }
          ]
        }

    ];


    
  }


 }
