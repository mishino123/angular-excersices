

/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompras:Producto[]=[{

    desc:"telefono1",
    precio:2100,
},
{
    desc:"telefono2",
    precio:2300,
}];


const [total, isv]=calcularISV(carritoCompras);

console.log("total", total)
console.log("ISV", isv)