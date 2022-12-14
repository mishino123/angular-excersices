import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=["Spiderman","Superman", "Batman", "Acuaman"]
  heroeBorrado: any=""

  BorrandoHeroe(){
    const heroe=this.heroes.shift()   || "";
    this.heroeBorrado = heroe
  }

  
}
