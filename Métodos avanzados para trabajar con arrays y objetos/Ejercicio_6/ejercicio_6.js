const estudiantes = [
  { nombre: "Laura", edad: 22, curso: "Matemáticas" },
  { nombre: "Carlos", edad: 25, curso: "Física" },
  { nombre: "Marta", edad: 20, curso: "Programación" },
];

function mostrarEstudiantes(arrayDeEstudiantes) {
  arrayDeEstudiantes.forEach((estudiante) => {
    const últimaLetraDelNombre = Array(...estudiante.nombre)[
      estudiante.nombre.length - 1
    ];
    console.log(
      `${estudiante.nombre} tiene ${estudiante.edad} y está ${
        últimaLetraDelNombre === "a" ? "inscrita" : "inscrito"
      } en el curso de ${estudiante.curso}`
    );
  });
}

mostrarEstudiantes(estudiantes);
