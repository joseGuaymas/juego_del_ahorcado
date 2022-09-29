let contenedorInicio = document.getElementById("contenedor-inicio");
let btnEmpezar = document.getElementById("boton-empezar");
let btnAgregarPalabra = document.getElementById("boton-agregar-palabra");
// let contenedorBoton = document.querySelectorAll(".contenedor-boton");
let contenedorAgregarPalabra = document.getElementById("contenedor-agregar-palabra");

let contenedorJuego = document.querySelector(".contenedor-juego");
let outputPalabraOculta = document.getElementById("output-palabra-oculta");
let outputLetrasErroneas = document.getElementById("output-letras-erroneas");
let botonNuevoJuego = document.getElementById('boton-nuevo-juego');
let botonDesistir = document.getElementById('boton-desistir');
let contenedorTeclas = document.getElementById('contenedor-teclas');

String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
const banco_de_palabras = ['muñeco', 'sublime', 'prioridad', 'proocurar', 'climatizacion', 'lombriz', 'funcionalidad', 'diametro', 'trigonometria', 'rimbombante', 'guiso', 'platica', 'entusiasmo', 'optimista'];

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
            if (arrErroneas.includes(letra)) {
                alert("Esta letra ya fue ingresada");
            };
        
            if(palabra_oculta.includes(letra)) {
                alert("Esta letra ya fue ingresada");
            };
            
            for(let l in palabra) {
                if(letra == palabra[l]){
                    palabra_oculta = palabra_oculta.replaceAt(l*2, letra);
                }; 
            };
        
            eliminarDuplicados();
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

function actualizarPalabraOculta(){
    outputPalabraOculta.innerHTML = palabra_oculta
};

function crearContenedorPalabraNueva(){
    contenedorAgregarPalabra.classList.remove("hidden");

    let labelPalabraNueva = document.createElement('label');
    labelPalabraNueva.classList.add("label-palabra-nueva");
    labelPalabraNueva.innerHTML = 'Ingrese una palabra:'
    
    let inputPalabraNueva = document.createElement('input');
    inputPalabraNueva.classList.add("input-palabra-nueva");
    
    let botonAgregarPalabra = document.createElement('button');
    let textoGuardarYEmpezar = document.createElement('p');
    botonAgregarPalabra.classList.add("btn-guardar-palabra-nueva");
    textoGuardarYEmpezar.innerHTML = 'Guardar y empezar';
    botonAgregarPalabra.appendChild(textoGuardarYEmpezar);
    
    let botonCancelar = document.createElement('button');
    let textoCancelar = document.createElement('p');
    botonCancelar.classList.add("btn-cancelar-palabra-nueva");
    textoCancelar.innerHTML = 'Cancelar';
    botonCancelar.appendChild(textoCancelar);
    
    let contenedorBotonesPalabraNueva = document.createElement('div');
    contenedorBotonesPalabraNueva.classList.add('box-botones-palabra-nueva');
    contenedorBotonesPalabraNueva.appendChild(botonAgregarPalabra);
    contenedorBotonesPalabraNueva.appendChild(botonCancelar);

    contenedorAgregarPalabra.appendChild(labelPalabraNueva);
    contenedorAgregarPalabra.appendChild(inputPalabraNueva);
    contenedorAgregarPalabra.appendChild(contenedorBotonesPalabraNueva);

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
        if (!vale){
            alert('Solo letras');
            inputPalabraNueva.style.borderColor = 'salmon';
        } else {
            if (!banco_de_palabras.includes(palabraNueva)){
                banco_de_palabras.push(palabraNueva);
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
