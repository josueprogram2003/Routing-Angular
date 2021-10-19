import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Libro } from '../../models/Libro';

@Component({
  selector: 'adra-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  @Output() enviar: EventEmitter<any> = new EventEmitter();
  libro:any;
  titulo: string = "";
  stock: string = "";
  descripcion: string = "";
  button:string="Agregar";

  constructor() { 
  }

  ngOnInit(): void {
  }

  agregar(){
    if (this.titulo!="" && this.stock!=undefined && this.descripcion!="") {
      this.libro = new Libro(this.titulo,this.stock,this.descripcion);
      this.enviar.emit(this.libro);
      this.limpiar();
    }
  }

   limpiar(){
    this.titulo = "";
    this.stock = "";
    this.descripcion= "";
  }

}
