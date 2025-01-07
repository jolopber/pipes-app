import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    PanelModule,
    FieldsetModule,
    ButtonModule,
    CommonModule
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['María', 'Pedro', 'Juan', 'Fernando', 'Melissa', 'Jose', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // keValue Pipe
  public person = {
    name: 'Jose',
    age: 36,
    address: 'Madrid, España'
  }

}
