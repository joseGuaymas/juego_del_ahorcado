let contenedorInicio = document.getElementById('contenedor-inicio');
let btnBox = document.querySelector('.btn-box');
let btnEmpezar = document.getElementById("boton-empezar");
let btnAgregarPalabra = document.getElementById("boton-agregar-palabra");
let contenedorAgregarPalabra = document.getElementById("contenedor-agregar-palabra");

let contenedorJuego = document.querySelector(".contenedor-juego");
let outputPalabraOculta = document.getElementById("output-palabra-oculta");
let outputLetrasErroneas = document.getElementById("output-letras-erroneas");
let botonNuevoJuego = document.getElementById('boton-nuevo-juego');
let botonDesistir = document.getElementById('boton-desistir');
let contenedorTeclas = document.getElementById('contenedor-teclas');
let anuncio = document.getElementById('anuncio');

String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
const banco_de_palabras = ['MUÑECO', 'SUBLIME', 'PRIORIDAD', 'PROCURA', 'CLIMATIZAR', 'LOMBRIZ', 'FUNCION', 'DIAMETRO', 'TRIGO', 'VERTIGO', 'GUISO', 'PRESTIGIO', 'ENTUSIASMO', 'OPTIMISTA','SOMBRA','LECHUZA','SABADO','CORNETA','BOZAL','LINTERNA','NOSOTROS','PLEGARIA','BORDE','CINEASTA','GRUESO','SILUETA','RIACHUELO','YERBA','QUEMADOR','ASUETO'];

let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let arrErroneas = []; 
let palabraResuelta = "";
let contadorErrores = 0;

const jsConfetti = new JSConfetti()

function esconderPantallaInicial(){
    contenedorInicio.classList.add('hidden');
    contenedorAgregarPalabra.classList.add('hidden');
    btnBox.classList.add('hidden');
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

function palabraAlAzar(){
    return banco_de_palabras[Math.floor(Math.random()*banco_de_palabras.length)]
};
let palabra = palabraAlAzar(); 

function generarGuiones(){
    return palabra.replace(/./g, "_ ");
};
let palabra_oculta = generarGuiones();

function generarTeclas(){
    for (let x=0; x < abecedario.length; x++){
        let valor = abecedario[x]
        let tecla = document.createElement('span');
        tecla.innerHTML = valor;
        tecla.classList.add('tecla');
        contenedorTeclas.appendChild(tecla);
    };
    let teclas = document.querySelectorAll('span');
    return teclas 
};

let listaDeTeclas = generarTeclas();

function deshabilitarTeclas(){
    for (let x=0; x<listaDeTeclas.length; x++){
        listaDeTeclas[x].classList.add('disabled');
    };
};

function habilitarTeclas(){
    for (let x=0; x<listaDeTeclas.length; x++){
        listaDeTeclas[x].classList.remove('disabled');
    };;
};

function mostrarAnuncioFinDelJuego(){
    anuncio.classList.remove('hidden');
    anuncio.innerHTML = 'Fin del juego';
    anuncio.classList.add('anuncio-fin-del-juego');
}

function mostrarConfetti(){
    jsConfetti.addConfetti()
};

function mostrarAnuncioGanaste(){
    anuncio.classList.remove('hidden');
    anuncio.innerHTML = '¡Ganaste, felicidades!';
    anuncio.classList.add('anuncio-ganaste');
};

function quitarAnuncioGanaste(){
    anuncio.classList.add('hidden');
};

for (let x=0; x<listaDeTeclas.length; x++){
    listaDeTeclas[x].addEventListener('click', (e)=>{
        e.preventDefault();

        let letra = listaDeTeclas[x].innerText;
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
                mostrarAnuncioFinDelJuego();
                contadorErrores += 0;
                outputPalabraOculta.innerHTML = palabra;
                deshabilitarTeclas();
            }
        };
         if (palabra === palabraResuelta) {
            deshabilitarTeclas();
            mostrarConfetti();
            vaciarArraysErroneas();
            mostrarAnuncioGanaste();
        };
    });
};


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
    habilitarTeclas();
    quitarAnuncioGanaste();
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
    labelPalabraNueva.innerHTML = 'Ingresá una palabra:'
    
    let inputPalabraNueva = document.createElement('input');
    inputPalabraNueva.classList.add("input-palabra-nueva");

    let avisoCaracteres = document.createElement('p');
    avisoCaracteres.classList.add('aviso-caracteres');
    avisoCaracteres.innerHTML = 'Màx. de 8 letras'

    
    let botonGuardarPalabra = document.createElement('button');
    let textoGuardarYEmpezar = document.createElement('p');
    botonGuardarPalabra.classList.add("btn-guardar-palabra-nueva");
    textoGuardarYEmpezar.innerHTML = 'Guardar y empezar';
    botonGuardarPalabra.appendChild(textoGuardarYEmpezar);
    
    let botonCancelar = document.createElement('button');
    let textoCancelar = document.createElement('p');
    botonCancelar.classList.add("btn-cancelar-palabra-nueva");
    textoCancelar.innerHTML = 'Cancelar';
    botonCancelar.appendChild(textoCancelar);
    
    let contenedorBotonesPalabraNueva = document.createElement('div');
    contenedorBotonesPalabraNueva.classList.add('box-botones-palabra-nueva');
    contenedorBotonesPalabraNueva.appendChild(botonGuardarPalabra);
    contenedorBotonesPalabraNueva.appendChild(botonCancelar);

    contenedorAgregarPalabra.appendChild(labelPalabraNueva);
    contenedorAgregarPalabra.appendChild(inputPalabraNueva);
    contenedorAgregarPalabra.appendChild(avisoCaracteres);
    contenedorAgregarPalabra.appendChild(contenedorBotonesPalabraNueva);

    function esconderContenedorPalabraNueva(){
        contenedorAgregarPalabra.classList.add('hidden');
        labelPalabraNueva.classList.add('hidden');
        inputPalabraNueva.classList.add('hidden');
        contenedorBotonesPalabraNueva.classList.add('hidden');
        botonGuardarPalabra.classList.add('hidden');
        botonCancelar.classList.add('hidden');
    };

    botonGuardarPalabra.addEventListener("click", (e)=>{
        e.preventDefault();
        guardarPalabra();
    });
    
    function guardarPalabra(){
        let palabraNueva = inputPalabraNueva.value;
        let vale = validarPalabra(palabraNueva);
        if (palabraNueva.length <= 10){
            if (!vale){
                alert('Tenés que ingresar unicamente letras!');
                inputPalabraNueva.style.borderColor = 'salmon';
            } else {
                if (!banco_de_palabras.includes(palabraNueva)){
                    banco_de_palabras.push(palabraNueva);
                    esconderContenedorPalabraNueva();
                    empezarJuego();
                    esconderContenedorPalabraNueva();
                } else {
                    alert("Esta palabra ya es parte del juego")
                }
            }
        } else {
            alert('Esta palabra tiene más de 10 caracteres!');
            inputPalabraNueva.style.borderColor = 'salmon';
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
