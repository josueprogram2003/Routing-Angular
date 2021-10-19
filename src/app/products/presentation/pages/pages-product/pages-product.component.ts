import { Libro } from './../../models/Libro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-pages-product',
  templateUrl: './pages-product.component.html',
  styleUrls: ['./pages-product.component.css']
})
export class PagesProductComponent implements OnInit {
  libro:Libro[] = [];
  constructor() { 
    this.libro =[
      {
        titulo:"Angular 2021",
        stock:"3",
        descripcion:"El mejor libro de angular de la vida"
      },
        {
        titulo:"Python",
        stock:"5",
        descripcion:"El mejor libro de Python de la vida"
      },
        {
        titulo:"Java",
        stock:"6",
        descripcion:"El mejor libro de Java de la vida"
      }
    ]
  }

  ngOnInit(): void {
  }


  recibirvalores(l:Libro){
  console.log(this.libro.length);
  this.libro.push(l);
  }
}
