

/*
    ===== Código de TypeScript =====
*/
//escrubunis una costante de un objeto

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto={
    desc:"Nokia 1100",
    precio:10000,
}

const tableta:Producto={
    desc:"IPAD",
    precio:150000,
}


 export function calcularISV(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;

    })
    return [total, total*0.15,]
}


const articulos=[telefono, tableta];

const isv=calcularISV(articulos);

console.log("ISV: ",isv)