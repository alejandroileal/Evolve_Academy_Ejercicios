import {
  empleados,
  agregarEmpleado,
  calcularTotalDeHoras,
  filtrarMasDeCuarentaHoras,
  ordenarPorHorasTrabajadas,
} from "./empleados.js";

agregarEmpleado("Juan", 50);
agregarEmpleado("Miguel", 30);
agregarEmpleado("Adriana", 43);
agregarEmpleado("Manuel", 74);
agregarEmpleado("Julia", 23);
agregarEmpleado("Mariana", 80);

console.log(empleados);

console.log(calcularTotalDeHoras());

console.log(filtrarMasDeCuarentaHoras());

console.log(ordenarPorHorasTrabajadas());
