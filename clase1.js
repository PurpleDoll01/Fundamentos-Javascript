class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura, pelo) {
    super(nombre, apellido, altura)
    this.pelo = pelo; 
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
  }
}

 
var purpledoll = new Persona('Mariana', 'Valencia', 1.54);
var erika = new Persona ('Erika', 'Luna', 1.65);
var arturo = new Persona ('Arturo', 'Martinez', 1.89);
var arturito = new Desarrollador ('Arturo', 'Martinez', 1.89, 'rojo');
