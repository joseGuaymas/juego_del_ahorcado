function validarPalabra(palabra){
    let esValida = false
    const validar = new RegExp(`^[A-Z]+$`,'i');
    if(!palabra){
        esValida = false
    } else {
        for (let i=0;i<palabra.length;i++){
            console.log(palabra[i])
            if(!validar.test(palabra[i])){
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