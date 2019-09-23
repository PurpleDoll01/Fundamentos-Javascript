var purpledoll = {
  nombre: 'Mariana',
  apellido: 'Valencia',
  edad: 29,
  peso: 52
}

console.log(`Al inicio del año ${purpledoll.nombre} pesa ${purpledoll.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;


for (var i=1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(purpledoll);
  } else if (random < 0.5) {
    adelgazar(purpledoll);
  } 
}

console.log(`Al final del año ${purpledoll.nombre} pesa ${purpledoll.peso.toFixed(1)}kg`);