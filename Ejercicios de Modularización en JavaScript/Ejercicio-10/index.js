import {
  cursos,
  agregarCurso,
  ordenarCursoPorInscritos,
  obtenerListaDeNombres,
} from "./cursos.js";

agregarCurso("Diseño Web", 25);
agregarCurso("JavaScript Avanzado", 40);
agregarCurso("React desde Cero", 35);
agregarCurso("UX/UI para Principiantes", 20);
agregarCurso("Backend con Node.js", 30);

console.log(cursos);

console.log("Ordenar Por Inscritos: ", ordenarCursoPorInscritos());

console.log("Lista De Nombres: ", obtenerListaDeNombres());
