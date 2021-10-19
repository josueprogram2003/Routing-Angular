import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../models/Libro';

@Component({
  selector: 'adra-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() datos:Libro[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
