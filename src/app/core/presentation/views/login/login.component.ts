import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'adra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() enviar: EventEmitter<boolean> = new EventEmitter();
  user:string="";
  pass:string="";

  constructor() { }

  ngOnInit(): void {
  }

  iniciarSesionAdra(){
    if (this.user=="josue123" && this.pass=="123") {
      this.enviar.emit(true);
      this.limpiar()
    } else {
      this.limpiar()
    }
  }
  limpiar(){
    this.user="";
    this.pass="";
  }

} 
