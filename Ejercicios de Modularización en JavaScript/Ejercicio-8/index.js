import {
  notas,
  agregarNota,
  filtrarNotasUrgentes,
  ordenarNotasPorPrioridad,
  buscarNota,
} from "./notas.js";

agregarNota("Fregar el suelo", "Fregar suelo hoy", 1);
agregarNota("Cocinar para toda la semana", "Cocinar", 0);
agregarNota("Darle de comer a los gatos", "Comida gatos", 1);
agregarNota("Netflix: Pagado, Prime, Pendiente", "Pagar suscripcciones", 0);

console.log(notas);

console.log("Filtrar Notas Urgentes: ", filtrarNotasUrgentes());

console.log("Ordenar Por Prioridad: ", ordenarNotasPorPrioridad());

console.log("Buscar Nota: ", buscarNota("Comida gatos"));
