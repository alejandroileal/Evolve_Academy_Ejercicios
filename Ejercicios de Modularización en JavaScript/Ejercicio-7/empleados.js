// Control de Horas de Trabajo de Empleados ⏳

// 📌 Objetivo: Gestiona las horas trabajadas de empleados.

export const empleados = [];

// ✅ Agregar empleados con su total de horas trabajadas.

export const agregarEmpleado = (nombre, horasTrabajadas) =>
  empleados.push({ nombre, horasTrabajadas });

// ✅ Calcular la suma total de horas.

export const calcularTotalDeHoras = () => {
  let total = 0;

  empleados.forEach((empleado) => (total += empleado.horasTrabajadas));

  return total;
};

// ✅ Filtrar empleados que trabajaron más de 40 horas (filter).

export const filtrarMasDeCuarentaHoras = () =>
  empleados.filter((empleado) => empleado.horasTrabajadas >= 40);

// ✅ Ordenar empleados por horas trabajadas (sort).

export const ordenarPorHorasTrabajadas = () =>
  empleados.sort((a, b) => b.horasTrabajadas - a.horasTrabajadas);
