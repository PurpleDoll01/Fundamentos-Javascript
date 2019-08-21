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

imprimirProfesiones(purpledoll);

function imprimirEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirEdad(purpledoll);
