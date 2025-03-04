// Suma Acumulativa ➕

// Diseña una función crearSumaAcumulativa que mantenga un valor acumulado y retorne la suma de los valores que se le vayan pasando.

const crearSumaAcumulativa = () => {
  let acumulado = 0;

  return (valor) => {
    acumulado += valor;
    return acumulado;
  };
};

const suma = crearSumaAcumulativa();

console.log(suma(400));
console.log(suma(400));
