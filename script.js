const fechaEvento = new Date("2026-07-15T20:30:00");

function actualizarContador(){

    const ahora = new Date();

    const diferencia = fechaEvento - ahora;

    if(diferencia<=0){

        document.getElementById("contador").innerHTML="";

        return;

    }

    const dias=Math.floor(diferencia/(1000*60*60*24));

    const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos=Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").textContent=dias;

    document.getElementById("horas").textContent=String(horas).padStart(2,'0');

    document.getElementById("minutos").textContent=String(minutos).padStart(2,'0');

    document.getElementById("segundos").textContent=String(segundos).padStart(2,'0');

}

actualizarContador();

setInterval(actualizarContador,1000);