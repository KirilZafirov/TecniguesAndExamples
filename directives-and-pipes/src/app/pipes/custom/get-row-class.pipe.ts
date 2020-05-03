import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getRowClass',
    pure: true
})
export class GetRowClassPipe implements PipeTransform {

    transform(isOdd: number, index?: number, length?: number): string {
        return isOdd ? 'alert-primary' :
                index === 0 ? 'alert-danger' :
                index === length - 1 ? 'alert-warning' : 'alert-success';
    }

}
