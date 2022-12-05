

/*
    ===== Código de TypeScript =====
*/

function sumar(a:number,b:number):number{
    return (a + b);
}

const resultado=sumar(10,20)//lossi no envioo
//dos datos me manda un error. porque intenta traducirlo
const sumarflecha=(a:number,b:number):number=>{
    return a+b;
}


function multiplicar(numero:number,otronumero:number,base:number=2){
    return numero*base
    // primero los obligatorios, luego los opcionales, luego los valores por defecto
}

interface PersonajeLOR {
   nombre: string;
   pv:number;
   mostrarHp:()=>void,
}

function curar(personaje:PersonajeLOR,curarX:number):void{
// si no retorno nada coloco el void
personaje.pv+=curarX
console.log(personaje)
}
const nuevoPersonaje:PersonajeLOR={
    nombre:"Strider",
    pv:50,
    mostrarHp(){
        console.log("puntos de vida", this.pv)
    }
}

curar(nuevoPersonaje,20)


const resultado1=multiplicar(5,10)
console.log(resultado1)