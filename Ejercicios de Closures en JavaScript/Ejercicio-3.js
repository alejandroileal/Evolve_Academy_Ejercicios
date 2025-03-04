// Banco de Saldo 💰

// Implementa una función crearCuentaBancaria que devuelva un objeto con métodos para depositar, retirar y consultarSaldo sin exponer directamente la variable del saldo.

const crearCuentaBancaria = () => {
  let saldo = 0;
  return {
    depositar: (cantidad) => (saldo += cantidad),
    retirar: (cantidad) =>
      saldo < cantidad ? "Saldo insuficiente" : (saldo -= cantidad),
    consultarSaldo: () => saldo,
  };
};

const cuenta = crearCuentaBancaria();

console.log(cuenta.depositar(100));
console.log(cuenta.consultarSaldo());
console.log(cuenta.retirar(100));
