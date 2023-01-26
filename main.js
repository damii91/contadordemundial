// OBTENER ELEMENTOS DEL DOM
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


// Fecha del mundial
const proximoMundial = '8 June 2026';

function contadorDeTiempo(){
    const fechaProximoMundial = new Date(proximoMundial)
    const fechaActual = new Date;

    // Total de segundos faltantes para el mundial
    const totalSegundos = (fechaProximoMundial - fechaActual) / 1000;

    // Cálculo del tiempo partiendo del total de segundos faltantes
    const diasFaltantes = Math.floor(totalSegundos / 3600 / 24);
    const horasFaltantes = Math.floor(totalSegundos / 3600) % 24;
    const minutosFaltantes = Math.floor(totalSegundos / 60) % 60;
    const segundosFaltantes = Math.floor(totalSegundos % 60)

    // Insertando los datos en el DOM
    dias.innerHTML = diasFaltantes;
    horas.innerHTML = horasFaltantes;
    minutos.innerHTML = minutosFaltantes;
    segundos.innerHTML = segundosFaltantes;
}

contadorDeTiempo()

setInterval(contadorDeTiempo, 1000);
