// Aplicación de Finanzas Personales 💰

export const finanzas = [];

// Registrar ingresos y gastos.

export const registrarTransacción = (transaccion, cantidad) =>
  finanzas.push({
    transaccion,
    cantidad: transaccion === "Gasto" ? -cantidad : cantidad,
  });

// Calcular saldo total .

export const calcularSaldoTotal = () =>
  finanzas.reduce(
    (acumulador, transaccion) => acumulador + transaccion.cantidad,
    0
  );
