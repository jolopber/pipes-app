import { Component, LOCALE_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';

// Configuración idiomas
import localeEs from '@angular/common/locales/es';
import localeFrCA from '@angular/common/locales/fr-CA';


import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEs );
registerLocaleData( localeFrCA );



@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    CommonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'jose lopez';
  public nameUpper: string = 'JOSE LOPEZ';
  public fullName: string = 'jOsE LOpeZ berRO';

  public customDate: Date = new Date();



}
