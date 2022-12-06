

/*
    ===== Código de TypeScript =====
*/

class Heroe{
     alterEgo: string;  // solamente se puede utilizar dentro de la clase
    edad: number;  // se puede utilizar desde cualquier estancia afuera
    nombreReal: number; // voy a poder acceder al valor de la propidead
    imprmirNombre(){
        return this.nombreReal+" "+ this.edad
    }
}


interface Personaje2{
   alterEgo?: string;  // solamente se puede utilizar dentro de la clase
    edad?: number;  // se puede utilizar desde cualquier estancia afuera
    nombreReal?: number; 
    imprimirNombre?:()=>{string } // en las interfaces no le puedo dar inteligencia alas funciones
}
const airoman=new Heroe();
const spiderman:Personaje2={};
console.log(airoman)