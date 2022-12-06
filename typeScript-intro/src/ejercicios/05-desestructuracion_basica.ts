

/*
    ===== Código de TypeScript =====
*/
//escrubunis una costante de un objeto

interface Reproductor {
    volumen: number;
    segundo:number;
    cancion: string;
    detalles:Detalles
}

interface Detalles {
    autor: string;
    anio:number;
}

const reproductor: Reproductor= {
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:" jose luis morales",
        anio: 2020,
    }
}

//esta es la manera que podrias hacer. 
console.log("El volumen actual es de: ",reproductor.volumen);
console.log("El Segundo actual es de: ", reproductor.segundo);
console.log("La cancion  actual es de: " ,  reproductor.cancion);
console.log("El autor actual es: de ", reproductor.detalles.autor)

//esta es la segunda manera con destructuring

const {volumen, segundo, cancion, detalles}=reproductor;
 const {autor}=detalles;
console.log("El volumen actual es de: ",volumen);
console.log("El Segundo actual es de: ", segundo);
console.log("La cancion  actual es de: " , cancion);
console.log("El autor actual es: de ", reproductor.detalles.autor);


const dbz:string[]=["goku","vegeta","Trunks"];
console.log("personaje 1: ",dbz[0]);
console.log("personaje 1: ",dbz[1]);
console.log("personaje 1: ",dbz[2]);

const [p1,p2,p3]=dbz
console.log("personaje 1: ",p1);
console.log("personaje 1: ",p2);
console.log("personaje 1: ",p3);