import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';





@NgModule({
   declarations:[     //las declaraciones son los componentes del modulo pero no son visibles
    HeroeComponent,
    ListadoComponent
   ], 
   exports:[      /// listado de cosas que van hacer utiles y visibles
    ListadoComponent
   ],
   imports:[            //solo importa module
        CommonModule
   ]

})

export class HeroesModule{

}