

interface Pasajero{
    nombre: string;
    hijos?: string[];
}


const pasajero1: Pasajero={
    nombre: "fernando"

}

const pasajero2: Pasajero={
    nombre: "laura",
    hijos:["camilo", "juan"]
}

function imprimirHijos(pasajero:Pasajero): void{
    const cuantoshijos=pasajero.hijos?.length || 0;
    console.log(cuantoshijos)
}

imprimirHijos(pasajero1)