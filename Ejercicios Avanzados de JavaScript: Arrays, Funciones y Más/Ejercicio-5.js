// Operaciones con Nombres de Usuarios

// Dado un array de nombres:

const nombres = ["Ana", "Juan", "Pedro", "Andrés"];

// Convierte todos los nombres a mayúsculas usando map.

const nombresEnMayúscula = nombres.map((nombre) => nombre.toLocaleUpperCase());

console.log(nombresEnMayúscula);

// Filtra los nombres que comienzan con la letra "A".

const nombresConLetraA = nombres.filter(
  (nombre) => nombre[0].toLocaleLowerCase() === "a"
);

console.log(nombresConLetraA);

// Ordena alfabéticamente.

const ordenarAlfabéticamente = [...nombres].sort();

console.log(ordenarAlfabéticamente);
