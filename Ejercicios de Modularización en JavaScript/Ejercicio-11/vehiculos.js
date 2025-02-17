// Sistema de Registro de Vehículos 🚗

export const vehiculos = [];

// Agregar vehículos con marca, modelo y año.

export const agregarVehiculo = (marca, modelo, año) =>
  vehiculos.push({ marca, modelo, año });

// Buscar vehículos de una marca (filter).

export const buscarVehiculoPorMarca = (marca) =>
  vehiculos.filter((vehiculo) => vehiculo.marca === marca);

// Ordenar vehículos por año (sort).

export const ordenarPorAño = () => vehiculos.sort((a, b) => b.año - a.año);
