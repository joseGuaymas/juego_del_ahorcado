function validarEntradas(cadena){
    let esValido = false;

    const validar = new RegExp(`^[A-Z]+$`,'i');
    if (!cadena) {
        esValido = false;
    } else {
        if (!validar.test(cadena)){
            esValido = false;
        } else {
            esValido = true;
        }        
    }
    return esValido
}

function validarPalabra(palabra){
    let esValida = false
    const vale = new RegExp(`^[A-Z]+$`,'i');
    if(!palabra){
        esValida = false
    } else {
        for (let i=0;i<palabra.length;i++){
            console.log(palabra[i])
            if(!vale.test(palabra[i])){
                esValida = false
                console.log('error de caracter')
                break
            }else{
                esValida=true
            }
        }
    }
   return esValida   
}