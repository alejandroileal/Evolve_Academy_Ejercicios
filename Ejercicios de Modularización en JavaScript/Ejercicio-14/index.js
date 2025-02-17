import {
  finanzas,
  registrarTransacción,
  calcularSaldoTotal,
} from "./finanzas.js";

registrarTransacción("Ingreso", 100);
registrarTransacción("Gasto", 44);
registrarTransacción("Ingreso", 760);
registrarTransacción("Gasto", 14);
registrarTransacción("Gasto", 200);

console.log(finanzas);

console.log("Saldo Total", calcularSaldoTotal());
