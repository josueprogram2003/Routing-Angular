import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'adra-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  valida:boolean=false;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   
  }

  obtenerDato(visibilidad:boolean){
    if (visibilidad) {
      console.log(["/products"],{relativeTo:this.route});
      this.router.navigate(["/products"],{relativeTo:this.route});
    }
  }

}
