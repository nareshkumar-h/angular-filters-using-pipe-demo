import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'filters-demo';

  products = [];


  selectedCategory:string;

  
  ngOnInit(){
    this.listProducts();
  }

  listProducts(){
    this.products=  [ {"id":1,"name":"MAC","price":1000, "category":"Laptop"},
    {"id":2,"name":"Lenova","price":500, "category":"Laptop"},
    {"id":3,"name":"iPhone","price":500, "category":"Mobile"}];
   
  }
}
