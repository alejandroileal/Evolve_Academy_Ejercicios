// Filtrado de Usuarios con Condiciones Múltiples

// Dado un array de objetos representando usuarios (nombre, edad, activo), escribe una función que:

// Devuelva solo los usuarios mayores de 18 que además estén activos.

// Usa operadores de comparación (>) y lógicos (&&).

const usuarios = [
  { nombre: "Juan", edad: 25, activo: true },
  { nombre: "María", edad: 17, activo: true },
  { nombre: "Carlos", edad: 30, activo: false },
  { nombre: "Ana", edad: 22, activo: true },
];

const filtrarMayoresDeEdad = (usuarios) =>
  usuarios.filter((usuario) => usuario.edad > 18 && usuario.activo);

console.log(filtrarMayoresDeEdad(usuarios));
