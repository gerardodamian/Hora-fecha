let formato24h = false; // Para alternar entre 12h y 24h

let inicializarHora = function () {
    let fechaActual = new Date();
    let tiempoHoras = fechaActual.getHours();
    let tiempoMinutos = fechaActual.getMinutes();
    let tiempoSegundos = fechaActual.getSeconds();

    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDay();
    let diaDelMes = fechaActual.getDate();
    let aActual = fechaActual.getFullYear();
    let amOpm = "";

    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Setiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    let esteMes = meses[mesActual];

    let diasDeLaSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];
    let diaDeHoy = diasDeLaSemana[diaActual];

    if (!formato24h) {
        // Formato 12 horas con AM/PM
        amOpm = tiempoHoras >= 12 ? "pm" : "am";
        tiempoHoras = tiempoHoras > 12 ? tiempoHoras - 12 : tiempoHoras;
        tiempoHoras = tiempoHoras === 0 ? 12 : tiempoHoras; // Para que las 00:00 sea 12 AM
    }

    tiempoHoras = tiempoHoras < 10 ? "0" + tiempoHoras : tiempoHoras;
    tiempoMinutos = tiempoMinutos < 10 ? "0" + tiempoMinutos : tiempoMinutos;
    tiempoSegundos =
        tiempoSegundos < 10 ? "0" + tiempoSegundos : tiempoSegundos;

    document.getElementById(
        "info"
    ).innerHTML = `${tiempoHoras}:${tiempoMinutos}:${tiempoSegundos} ${
        !formato24h ? amOpm : ""
    }`;
    document.getElementById(
        "Fecha"
    ).innerHTML = `${diaDeHoy} ${diaDelMes} de ${esteMes} del ${aActual}`;
};

inicializarHora();
setInterval(inicializarHora, 1000);

// Evento para cambiar el formato al hacer clic en el botón
document.getElementById("toggleFormato").addEventListener("click", function () {
    formato24h = !formato24h; // Alternamos el formato
    this.textContent = formato24h ? "Cambiar a AM-PM" : "Cambiar a 24 horas"; // Cambiar el texto del botón
    inicializarHora(); // Actualizar la hora inmediatamente
});
