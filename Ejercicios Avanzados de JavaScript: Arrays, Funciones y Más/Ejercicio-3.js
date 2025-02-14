// 3️⃣ Historial de Transacciones Bancarias

// Dado un array de transacciones (positivo = ingreso, negativo = gasto):

const transacciones = [200, -50, -100, 350, -20];

// Suma el saldo total.

const calcularSaldoTotal = (transacciones) => {
  let total = 0;

  transacciones.forEach((transacción) => {
    total += transacción;
  });

  return total;
};

// console.log(calcularSaldoTotal(transacciones));

// Filtra las transacciones mayores a 100.

const filtrarMayorACien = (transacciones) =>
  transacciones.filter((transtacción) => transtacción > 100);

// console.log(filtrarMayorACien(transacciones));

// Invierte el orden de las transacciones sin usar reverse.

const invertirOrden = (transacciones) => {
  const ordenInvertido = [];

  for (let i = transacciones.length - 1; i >= 0; i--) {
    ordenInvertido.push(transacciones[i]);
  }

  return ordenInvertido;
};

// console.log(invertirOrden(transacciones));
