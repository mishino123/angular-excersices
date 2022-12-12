

/*
    ===== Código de TypeScript =====
*/

function queTypoSoy<T>(argumento:T){ // le indico con la letra el tipo de elemento que le voy a enviar..
    return argumento;
}


let soyString=queTypoSoy("un ingeniero");
let SoyNumero=queTypoSoy(9)
let soyArreglo=queTypoSoy([9,2,3,4,5]);
let SoyGenerico=queTypoSoy<number>(100)