// Creación de un Registro de Asistencia

// Dado un array de nombres de estudiantes y un objeto asistencia vacío, escribe una función que:

// Agregue cada estudiante como una propiedad del objeto con un valor booleano (true si asistió, false si no).

// Devuelva el objeto resultante.

const registrarAsistencia = (estudiantes, estudiantesQueAsistieron) => {
  const asistencia = {};

  estudiantes.forEach(
    (estudiante) =>
      (asistencia[estudiante] = estudiantesQueAsistieron.includes(estudiante))
  );

  return asistencia;
};

const estudiantes = ["Alejandro", "María", "Carlos", "Sofía", "Javier"];
const estudiantesQueAsistieron = ["Alejandro", "Sofía", "Carlos"];

console.log(registrarAsistencia(estudiantes, estudiantesQueAsistieron));
