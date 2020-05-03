import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureList',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(list: any[], args: any , flag): any[] {
    return list.filter(itemInList => itemInList[args] === flag);
  } 
}
