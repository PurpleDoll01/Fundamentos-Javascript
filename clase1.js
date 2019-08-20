var purpledoll = {
  nombre: 'PurpleDoll',
  apellido: 'Dollanganger',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 34
}

function imprimirEnMayusculas(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirEnMayusculas(purpledoll);
imprimirEnMayusculas(dario);
imprimirEnMayusculas({ nombre: 'Pepito' })

imprimirNombreYEdad(purpledoll);

function cumpleanos(persona) {
  persona.edad += 1;
}
