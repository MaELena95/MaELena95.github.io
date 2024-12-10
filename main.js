const fecha = document.querySelector('#fecha');
const FECHA = new Date ();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{
    weekday: 'long',
    month: 'short',
    day: 'numeric',
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


typewriter.typeString('Hola,hi,Bonjour,	Salve,Olá,	Guten Tag')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Te saluda Maria Elena Duran Del Razo')
    .pauseFor(2500)
    .deleteChars(36)
    .typeString('<strong>Ing tecnologías de la información</strong>')
    .pauseFor(2500)
    .start();

