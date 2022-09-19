let contenedorInicio = document.getElementById("contenedor-inicio");
let btnEmpezar = document.getElementById("boton-empezar");
let btnAgregarPalabra = document.getElementById("boton-agregar-palabra");
let contenedorBoton = document.querySelectorAll(".contenedor-boton");
let contenedorAgregarPalabra = document.getElementById("contenedor-agregar-palabra");

let contenedorJuego = document.querySelector(".contenedor-juego");
let labelJuego = document.getElementById('label-juego');
let inputJuego = document.getElementById('input-letra');
let botonEvaluar = document.getElementById("evaluar");
let outputPalabraOculta = document.getElementById("outputPalabraOculta");
let outputLetrasErroneas = document.getElementById("outputLetrasErroneas");
let botonNuevoJuego = document.getElementById('boton-nuevo-juego');
let botonDesistir = document.getElementById('boton-desistir');
let contenedorTeclas = document.getElementById('contenedor-teclas');

String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
const banco_de_palabras = ['sublime', 'prioridad', 'proocurar', 'climatizacion', 'lombriz', 'funcionalidad', 'diametro', 'trigonometria', 'rimbombante', 'guiso', 'platica', 'entusiasmo', 'optimista'];

let abecedario = "abcdefghijklmnñopqrstuvwxyz";
let arrErroneas = []; 
let palabraResuelta = "";
let contadorErrores = 0;

function palabraAlAzar(){
    return banco_de_palabras[Math.floor(Math.random()*banco_de_palabras.length)]
};
let palabra = palabraAlAzar(); 

function generarGuiones(){
    return palabra.replace(/./g, "_ ");
};
let palabra_oculta = generarGuiones();

function generarTeclas(){
    for (let x=0;x<abecedario.length;x++){
        let valor = abecedario[x]
        let tecla = document.createElement('button');
        tecla.innerHTML = valor;
        console.log(tecla.innerHTML)
        tecla.classList.add('tecla');
        contenedorTeclas.appendChild(tecla);
    
        tecla.addEventListener('click', (e) => {
            e.preventDefault();
            let letra = tecla.innerHTML.toLowerCase();
            console.log(letra)
            console.log(palabra)
        
            let verificado = validarEntradas(letra)
            if (!verificado){
                // button.style.borderColor = 'salmon';
                // limpiarInput()        
                alert('Ingresar ùnicamente letras');
            } else {
                if (arrErroneas.includes(letra)) {
                    alert("Esta letra ya fue ingresada");
                };
            
                if(palabra_oculta.includes(letra)) {
                    alert("Esta letra ya fue ingresada");
                };
            
                for(let l in palabra) {
                    console.log(letra)
                    if(letra == palabra[l]){
                        console.log(letra)
                        palabra_oculta = palabra_oculta.replaceAt(l*2, letra);
                    }; 
                };
            
                eliminarDuplicados();
                // limpiarInput() ;
                actualizarPalabraOculta();
                fnPalabraResuelta();
            

                if((!palabra_oculta.includes(letra)) && (!arrErroneas.includes(letra))){
                    arrErroneas.push(letra);
                    let letrasErroneas = eliminarDuplicados();
                    outputLetrasErroneas.innerHTML = letrasErroneas;
                    contadorErrores += 1;

                    contarErrores();

                    if (contadorErrores == 7) {
                        alert("fin del juego");
                        contadorErrores += 0;
                    };
                };

                if (palabra === palabraResuelta) {
                    alert("has ganado!");
                    vaciarArraysErroneas();
                    nuevoJuego();        
                };
            };
        });
    };
};

function esconderPantallaInicial(){
    contenedorInicio.classList.add('hidden');
    btnEmpezar.classList.add('hidden');
    btnAgregarPalabra.classList.add('hidden');
};

function mostrarPantallaJuego(){
    contenedorJuego.classList.remove('hidden');
    // labelJuego.classList.remove('hidden');
    // inputJuego.classList.remove('hidden');
    // botonEvaluar.classList.remove('hidden');
    outputPalabraOculta.classList.remove('hidden');
    outputLetrasErroneas.classList.remove('hidden');
    botonNuevoJuego.classList.remove("hidden");
    botonDesistir.classList.remove("hidden");
    canvas.classList.remove('hidden');
    generarTeclas();
};

function empezarJuego(){
    esconderPantallaInicial();
    mostrarPantallaJuego();
    dibujarHorca();
    outputPalabraOculta.innerHTML = palabra_oculta
}

btnEmpezar.addEventListener('click',(e)=>{
    e.preventDefault();
    empezarJuego();
}); 

function vaciarArraysErroneas(){
    arrErroneas = [];
    letrasErroneas = [];    
}

function nuevoJuego(){
    palabra = palabraAlAzar();
    palabra_oculta = palabra.replace(/./g, "_ ");
    outputPalabraOculta.innerHTML = palabra_oculta;
    limpiarLienzo();
    dibujarHorca();
    contadorErrores = 0;
    outputLetrasErroneas.innerHTML = "";
    vaciarArraysErroneas();
};

function desistir(){
    location.reload();
};

botonNuevoJuego.addEventListener('click', (e)=>{
    e.preventDefault();
    nuevoJuego();
});

botonDesistir.addEventListener('click', (e)=>{
    e.preventDefault();
    desistir();
});


function contarErrores(){
    if (contadorErrores == 1){
        dibujarCabeza();
    } if(contadorErrores == 2){
        dibujarCuerpo();
    } if(contadorErrores == 3){
        dibujarPiernaD();
    } if(contadorErrores == 4){
        dibujarPiernaI();
    } if(contadorErrores == 5){
        dibujarBrazoD();
    } if(contadorErrores == 6){
        dibujarBrazoI();
    } if(contadorErrores == 7){
        dibujarFin(); 
    }
}

function eliminarDuplicados(){
    let arrayErroneasSeteado = new Set(arrErroneas);
    let arraySinDuplicados = [...arrayErroneasSeteado];
    return arraySinDuplicados; 
}

function fnPalabraResuelta(){
    palabraResuelta = palabra_oculta.replace(/ /g, "");
    return palabraResuelta; 
};

// function limpiarInput(){
//     inputJuego.value = ""
// };

function actualizarPalabraOculta(){
    outputPalabraOculta.innerHTML = palabra_oculta
    console.log(palabra_oculta)
};


function crearContenedorPalabraNueva(){
    contenedorAgregarPalabra.classList.remove("hidden");

    let labelPalabraNueva = document.createElement('label');
    labelPalabraNueva.classList.add("labelPalabraNueva");
    labelPalabraNueva.innerHTML = 'Escribí una palabra para agregar al juego'

    let inputPalabraNueva = document.createElement('input');
    inputPalabraNueva.classList.add("inputPalabraNueva");
    
    var botonAgregarPalabra = document.createElement('button');
    botonAgregarPalabra.classList.add("botonAgregarPalabra");
    botonAgregarPalabra.innerHTML = 'Guardar y empezar';
    
    let botonCancelar = document.createElement('button');
    botonCancelar.classList.add("botonCancelar");
    botonCancelar.innerHTML = 'Cancelar';
    
    contenedorAgregarPalabra.appendChild(labelPalabraNueva);
    contenedorAgregarPalabra.appendChild(inputPalabraNueva);
    contenedorAgregarPalabra.appendChild(botonAgregarPalabra);
    contenedorAgregarPalabra.appendChild(botonCancelar);


    function esconderContenedorPalabraNueva(){
        contenedorAgregarPalabra.classList.add('hidden');
        labelPalabraNueva.classList.add('hidden');
        inputPalabraNueva.classList.add('hidden');
        botonAgregarPalabra.classList.add('hidden');
        botonCancelar.classList.add('hidden');
    };

    botonAgregarPalabra.addEventListener("click", (e)=>{
        e.preventDefault();
        agregarPalabra();
    });
    
    function agregarPalabra(){
        let palabraNueva = inputPalabraNueva.value;
        let vale = validarPalabra(palabraNueva);
        console.log(vale)
        if (!vale){
            alert('Solo letras');
            inputPalabraNueva.style.borderColor = 'salmon';
        } else {
            if (!banco_de_palabras.includes(palabraNueva)){
                banco_de_palabras.push(palabraNueva);
                console.log(banco_de_palabras)
                let aviso = document.createElement('p');
                aviso.classList.add('aviso') 
                aviso.innerText = 'Agregaste la palabra '+ palabraNueva;
                contenedorAgregarPalabra.appendChild(aviso)
                esconderContenedorPalabraNueva();
                empezarJuego();
            } else {
                alert("Esta palabra ya es parte del juego")
            }
        }
    };

    botonCancelar.addEventListener('click', (e)=>{
        e.preventDefault();
        location.reload();
    })
};


btnAgregarPalabra.addEventListener('click', (e) =>{
    e.preventDefault();
    esconderPantallaInicial();
    crearContenedorPalabraNueva();
});


// function validarEntrada(){

// }