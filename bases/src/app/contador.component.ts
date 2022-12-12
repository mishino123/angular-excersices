import {Component} from '@angular/core';

@Component({
    selector: "app-contador",
    template: `
    <span> la base es:  <strong>{{base}}</strong></span>
    <button (click)="acumular(base)">{{base}}</button>
    <button (click)="acumular(-base)">{{base}}</button>
    `,
})
export class ContadorComponent{
    title:string = 'hola mundo';
    base: number=5;
    acumular(entrada:number){
        this.base+=entrada;
    }

}