

/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{   // aplicacion de extension de react

    constructor (
        public nombre: string,
        public direccion: string,
    ){}
}
class Heroe extends PersonaNormal{
    //  alterEgo: string;  // solamente se puede utilizar dentro de la clase
    // edad: number;  // se puede utilizar desde cualquier estancia afuera
    // nombreReal: number; // voy a poder acceder al valor de la propidead
    // constructor(alterEgo:string){
    //    this.alterEgo=alterEgo
    // }
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string)
        {
            super(nombreReal, "New York, USA");                // el super llama el otro constructor de la clase PersonaNormal
        }
}


interface Personaje2{
   alterEgo?: string;  // solamente se puede utilizar dentro de la clase
    edad?: number;  // se puede utilizar desde cualquier estancia afuera
    nombreReal?: number; 
    imprimirNombre?:()=>{string } // en las interfaces no le puedo dar inteligencia alas funciones
}
const airoman=new Heroe("jose" , 15 ,  "mishino");
console.log(airoman)
