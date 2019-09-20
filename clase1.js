var purpledoll = {
  nombre: 'Mariana',
  apellido: 'Valencia',
  edad: 29,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log('Ingeniero');
  } else {
    console.log('No es ingeniero');
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  }
  if (persona.drone) {
    console.log('Vuela drone');
  }
}

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}


const permitirAcceso = ({ edad }) => {
  if (!esMayorDeEdad({ edad })) {
    console.log('ACCESO DENEGADO');
  } else {
    console.log('ENtre ps');
  }
}
