import { Pipe, PipeTransform } from "@angular/core";


@Pipe ({
    name: 'canFly',
    standalone: true
})
export class CanFlyPipe implements PipeTransform {

    transform( vuela: boolean ): 'vuela'|'no vuela' {
        return ( vuela )
            ? 'vuela'
            : 'no vuela';
    }
}