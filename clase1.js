function Persona (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

var purpledoll = new Persona('Mariana', 'Valencia');
purpledoll.saludar();

var erika = new Persona ('Erika', 'Luna');
erika.saludar();