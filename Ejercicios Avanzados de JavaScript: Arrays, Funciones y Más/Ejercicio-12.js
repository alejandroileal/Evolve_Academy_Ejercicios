// Sistema de Gestión de Alumnos (Operador Spread + Objetos)

const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 17 },
];

// Crea una función para:

// Añadir un nuevo alumno a un array de objetos. (Lo hice mutando en el array original)

const añadirAlumno = (alumno) => alumnos.push(alumno);

añadirAlumno({ nombre: "Alejandro", edad: 25 });

console.log(alumnos);

// Actualizar información de un alumno específico (sin mutar el original) usando el operador spread.

const actualizarInformaciónDeAlumno = (
  listaDeAlumnos,
  nombreDeAlumnoAEditar,
  nuevoNombre,
  nuevaEdad
) =>
  listaDeAlumnos.map((alumno) =>
    alumno.nombre === nombreDeAlumnoAEditar
      ? {
          ...alumno,
          nombre: nuevoNombre,
          edad: nuevaEdad === undefined ? alumno.edad : nuevaEdad,
        }
      : alumno
  );

console.log(actualizarInformaciónDeAlumno(alumnos, "Juan", "Héctor"));

// Contar cuántos alumnos tienen más de 18 años. (Toma en cuenta un tercer alumno porque en las funciones de anteriores se modificó el array original)

const contarMayoresDeEdad = (alumnos) =>
  alumnos.filter((alumno) => alumno.edad > 18).length;

console.log(contarMayoresDeEdad(alumnos));
