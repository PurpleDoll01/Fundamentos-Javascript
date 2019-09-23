var purpledoll = {
  nombre: 'Mariana',
  apellido: 'Valencia',
  edad: 29,
  peso: 52
}

console.log(`Al inicio del año ${purpledoll.nombre} pesa ${purpledoll.peso}kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4; 

const META = purpledoll.peso - 3;
var dias = 0;

while (purpledoll.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(purpledoll);
  }
  if (realizaDeporte()) {
    adelgazar(purpledoll);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${purpledoll.nombre} adelgazó 3kg`);