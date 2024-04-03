const teclas = document.querySelectorAll('.tecla');

function reproduzirSomDaTecla(audio) {
    const elemento = document.querySelector(audio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log("Erro ao localizar audio");
    }
}
for (let i = 0; i < teclas.length; i++) {

    const tecla = teclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        reproduzirSomDaTecla(idAudio);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


