// Se declaran con class

class Robot {
};

// no hay hoisting
/* Uncaught ReferenceError: Robot is not defined */
const instanceRobot = new Robot();
class Robot {
};

// constructor
class Robot {
  constructor(name) {
    this._name = name;
  }
};
const instanceRobot = new Robot('r2d2');

// tienen de fábrica getters y setters
class Robot {
  constructor(name) {
    this._name = name;
  }
  get name () {
    return this._name;
  }
  set name (name) {
    this._name = name;
  }
};
const instanceRobot = new Robot('r2d2');
/* Para acceder a los getters y setters se usa la notación de puntos */
instanceRobot.name;
instanceRobot.name = 'c3po';

// métodos estáticos que no necesitan instancia
class Robot {
  static staticMethod() {
    console.log('foo');
  }
};
Robot.staticMethod(); // foo

// Herencia
class Animals {
  constructor(name) {
  this._name = name || '';
}
  walk() {
    console.log(this._name + ' are walking');
  }

}

class Dinosaur extends Animals {
  becomeExtinct(meteor) {
    console.log('Kabum');
  }
}

var instanceDinosaur = new Dinosaur('Triceratops');
instanceDinosaur.walk(); // Triceratops are walking
instanceDinosaur.becomeExtinct(); // Kabum

/* Para referirse a los métodos y propiedades de la clase superior dentro de la clase extendida hay que utilizar el método super(). */

class Dinosaur extends Animals {
  constructor(name, surname) {
    super(name);
    this._completName = this._name + '  ' + surname;
  }
  becomeExtinct(meteor) {
    console.log(this._completName + ' Kabum');
  }
}
var instanceDinosaur = new Dinosaur('Triceratops', 'Triceratoidae');
instanceDinosaur.becomeExtinct(); //Triceratops Triceratoidae Kabum