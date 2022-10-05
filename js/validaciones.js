function validarPalabra(palabra){
    let esValida = false
    const validar = new RegExp(`^[A-Z\u00f1\u00d1\]+$`,'i');
    if(!palabra){
        esValida = false
    } else {
        for (let i=0;i<palabra.length;i++){
            if(!validar.test(palabra[i])){
                esValida = false
                break
            }else{
                esValida=true
            }
        }
    }
   return esValida   
}