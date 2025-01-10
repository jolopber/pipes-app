import { Pipe, PipeTransform } from '@angular/core';

// jose | toggleCase = 'JOSE'
// JOSE | toggleCase = 'jose'

@Pipe({
    name: 'toggleCase',
    standalone: true
})
export class ToggleCasePipe implements PipeTransform {

    transform( value: string): string {
        return value.toUpperCase();
    }
}