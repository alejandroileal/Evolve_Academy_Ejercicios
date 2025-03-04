// Cálculo de Diferencias con Asignación Compuesta

// Dado un objeto con dos propiedades a y b (ambas números), escribe una función que:

// Reste b de a utilizando el operador -=.

// Multiplique a por 3 y divida b entre 2.

// Devuelva un nuevo objeto con las propiedades actualizadas.

const nuevoObjeto = { a: 4, b: 7 };

const calculoDeAsignacion = (obj) => {
  obj.a -= obj.b;
  obj.a *= 3;
  obj.b /= 2;

  return { a: obj.a, b: obj.b };
};

console.log(calculoDeAsignacion(nuevoObjeto));
