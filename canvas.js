const canvas = document.getElementById('canvas');

function dibujarCabeza() {
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(60, 40, 15, 0, Math.PI * 2, true); // Outer circle
    //   ctx.moveTo(110, 75);
    //   ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    //   ctx.moveTo(65, 65);
    //   ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    //   ctx.moveTo(95, 65);
    //   ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
}

function dibujarHorca(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60, 25);
        ctx.lineTo(60, 15);
        ctx.lineTo(15, 15);
        ctx.moveTo(15, 15);
        ctx.lineTo(15, 120, 5, 5);
        ctx.lineTo(40, 120);
        ctx.stroke();
        ctx.closePath();
    };
};

function dibujarCuerpo(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60, 55);
        ctx.lineTo(60, 80);
        ctx.stroke();
        ctx.closePath();
    }
}; 

function dibujarPiernaD(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60, 80);
        ctx.lineTo(70, 100);
        ctx.stroke();
        ctx.closePath();
    }
}

function dibujarPiernaI(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60, 80);
        ctx.lineTo(50, 100);
        ctx.stroke();
        ctx.closePath();
    }
}

function dibujarBrazoD(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60, 60);
        ctx.lineTo(70, 75);
        ctx.stroke();
        ctx.closePath();
    }
}

function dibujarBrazoI(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(60, 60);
        ctx.lineTo(50, 75);
        ctx.stroke();
        ctx.closePath();
    }
}

function dibujarFin(){
    if (canvas.getContext) {
        const ctx =  canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(75, 58);
        ctx.lineTo(45, 58);
        ctx.stroke();
        ctx.closePath();
    }
}

function limpiarLienzo(){
    canvas.width=canvas.width;
};

// ctx.fillRect(15, 10, 10, 30); 
//      linea rellena de 15px de ancho por 10px de alto
// ctx.strokeRect(35, 30, 10, 30); 
//     rectangulo de 35 x 30 sin rellenar   
// ctx.clearRect(45, 45, 60, 60); 
//      borra el espacio de 45x45px, elimina lo dibujado 
// beginPath()
//      Crea un nuevo camino. Una vez creados, los comandos de dibujo futuros se dirigen a la ruta y se utilizan para construir la ruta.
// moveTo(x,y)
//      Mueve el puntero
// lineTo(x,y)
//      dibuja una linea en direccion x,y
// closePath()
//      Agrega una línea recta a la ruta, yendo al inicio de la ruta secundaria actual.
// stroke()
//      Dibuja la forma acariciando su contorno.
// fill()
//      Dibuja una forma sólida llenando el área de contenido de la ruta.


// function draw() {
    //     const canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
    //       const ctx = canvas.getContext('2d');
  
    //       ctx.beginPath(); // inicia camino
//       ctx.moveTo(75, 50); // muevo el inicio
//       ctx.lineTo(100, 75); // trazo la primera linea 100 de ancho y 75 de largo
//       ctx.lineTo(100, 25); // trazo la segunda linea
//       ctx.fill(); // ciero el camino rellenandolo
//     }
//   }
  