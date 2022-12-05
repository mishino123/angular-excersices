/*
    ===== Código de TypeScript =====
*/

const nombre="jose";//infiere el tipo de dato, lo puedo colocar de forma explicita o no.
let hp:number| string=95;
let estaVivo: boolean=true;
hp="nota";
let habilidades=[]; //any=lo que sea, puedo ingresar lo que sea 
let habilidades1=["jose", "juan", "pedro",100]
habilidades.push(true);
console.log(habilidades)

//interface util para creacion de objetos

interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}


const personaje: Personaje={
    nombre:"jose",
    hp:100,
    habilidades:["habla","piensa"]

}
personaje.puebloNatal="Anolaima"
console.table(personaje);