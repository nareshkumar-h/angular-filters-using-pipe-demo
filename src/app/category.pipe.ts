import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(items: any[], selectedCategory: string): any[] {
    if(!items) return [];
    if(!selectedCategory) return items;
    console.log('Category Pipe:' , selectedCategory);
    return items.filter( it => {
      return it.category == selectedCategory;
    });
  }

}
