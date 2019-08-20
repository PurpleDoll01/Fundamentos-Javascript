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

function imprimirEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirEnMayusculas(purpledoll);
imprimirEnMayusculas(dario);
imprimirEnMayusculas({ nombre: 'Pepito' })
