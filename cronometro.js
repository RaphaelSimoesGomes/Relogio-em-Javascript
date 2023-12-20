let startTime;
let cronometro;

function atualizarCronometro() {
    const currentTime = new Date();
    const elapsedTime = new Date(currentTime - startTime);

    const horas = elapsedTime.getUTCHours();
    const minutos = elapsedTime.getUTCMinutes();
    const segundos = elapsedTime.getUTCSeconds();

    const formatarNumero = (num) => (num < 10 ? `0${num}` : num);
    const tempoFormatado = `${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}`;

    document.getElementById('horas').innerHTML = tempoFormatado;
}

function iniciarCronometro() {
    startTime = new Date();
    cronometro = setInterval(atualizarCronometro, 1000);
}

function pararCronometro() {
    clearInterval(cronometro);
}

function zerarCronometro() {
    clearInterval(cronometro);
    document.getElementById('horas').innerHTML = '00:00:00';
}



