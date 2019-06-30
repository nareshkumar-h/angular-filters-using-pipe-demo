## Filters using Pipes

#### Prerequisite
* Create Project and add FormsModule entry in app.module.ts

#### Step 1.1: List Products ( Component )
* app.component.ts
```
export class AppComponent implements OnInit {
  title = 'filters-demo';

  products = [];

  selectedCategory: string;

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.products = [{ "id": 1, "name": "MAC", "price": 1000, "category": "Laptop" },
    { "id": 2, "name": "Lenova", "price": 500, "category": "Laptop" },
    { "id": 3, "name": "iPhone", "price": 500, "category": "Mobile" }];

  }
}
```

#### Step 1.2: List Products ( View )
```
<h3>Filters using Pipe - Demo</h3>

Category : 
<select [(ngModel)]="selectedCategory">
    <option value="">--ALL--</option>
  <option value="Mobile">Mobile</option>
  <option value="Laptop">Laptop</option>
</select>
Selected Category: {{selectedCategory}}
<br/>

<h3>Product List</h3>
<table border="1">
  <thead><tr><th>Sno</th><th>Product Name</th><th>Price</th><th>Category</th></tr></thead>
  <tbody *ngFor="let p of products">
      <tr><td>{{p.id}}</td><td>{{p.name}}</td><td>{{p.price}}</td>
        <td>{{p.category}}</td>
      </tr>
 </tbody>
</table>
```

#### Step 2 : Create Pipe
```
ng g pipe category
```

#### Step 2.1: Implement logic for category filter
```
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
```

#### Step 3: Add category filter in app.component.html
Replace
```
 <tbody *ngFor="let p of products">
 ```
 To
 ```
  <tbody *ngFor="let p of products | category: selectedCategory">
  ```

