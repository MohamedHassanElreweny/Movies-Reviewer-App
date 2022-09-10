import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], term:string): any[] {
    return items.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()))
  }

}
