const canvas = document.getElementById('canvas');

function dibujarHorca(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0A3871';
        ctx.beginPath();
        ctx.moveTo(90, 25);
        ctx.lineTo(90, 15);
        ctx.lineTo(35, 15);
        ctx.moveTo(35, 15);
        ctx.lineTo(35, 120, 5, 5);
        ctx.lineTo(90, 120);
        ctx.lineTo(90, 115);
        ctx.lineTo(40, 115);
        ctx.lineTo(40, 20);
        ctx.lineTo(85, 20);
        ctx.lineTo(85, 20);
        ctx.lineTo(85, 25);
        ctx.lineTo(90, 25);
        ctx.fill();
        ctx.closePath();
    };
};

function dibujarCabeza() {
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0A3871';
      ctx.beginPath();
      ctx.arc(88, 40, 15, 0, Math.PI * 2, true);
      ctx.arc(90, 40, 5, 0, Math.PI * 2, true);
      ctx.fill();
    }
}

function dibujarCuerpo(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(88, 55);
        ctx.lineTo(88, 80);
        ctx.lineTo(86, 80);
        ctx.lineTo(86, 53);
        ctx.fill();
        ctx.closePath();
    }
}; 

function dibujarPiernaD(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(86, 80);
        ctx.lineTo(75, 100);
        ctx.lineTo(77, 100);
        ctx.lineTo(88, 80);
        ctx.fill();
        ctx.closePath();
    }
}

function dibujarPiernaI(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(88, 80);
        ctx.lineTo(99, 100);
        ctx.lineTo(97, 100);
        ctx.lineTo(86, 80);
        ctx.fill();
        ctx.closePath();
    }
}

function dibujarBrazoD(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(88, 60);
        ctx.lineTo(77, 75);
        ctx.lineTo(77, 73);
        ctx.lineTo(86, 58);
        ctx.fill();
        ctx.closePath();
    }
}

function dibujarBrazoI(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(86, 60);
        ctx.lineTo(99, 75);
        ctx.lineTo(99, 73);
        ctx.lineTo(88, 58);
        ctx.fill();
        ctx.closePath();
    }
}

function dibujarFin(){
    if (canvas.getContext) {
        const ctx =  canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(105, 55);
        ctx.lineTo(70, 55);
        ctx.lineTo(70, 57);
        ctx.lineTo(105, 57);
        ctx.fill();
        ctx.closePath();
    }
}

function limpiarLienzo(){
    canvas.width=canvas.width;
};
