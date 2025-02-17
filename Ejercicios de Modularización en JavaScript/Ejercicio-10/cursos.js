// Plataforma de Cursos Online 📚

// 📌 Objetivo: Maneja una lista de cursos y estudiantes inscritos.

export const cursos = [];

// ✅ Agregar cursos con nombre y número de estudiantes.

export const agregarCurso = (nombreDelCurso, numeroDeInscritos) =>
  cursos.push({ nombreDelCurso, numeroDeInscritos });

// ✅ Ordenar cursos por cantidad de inscritos (sort).

export const ordenarCursoPorInscritos = () =>
  cursos.sort((a, b) => b.numeroDeInscritos - a.numeroDeInscritos);

// ✅ Obtener una lista de nombres (map).

export const obtenerListaDeNombres = () =>
  cursos.map((curso) => curso.nombreDelCurso);
