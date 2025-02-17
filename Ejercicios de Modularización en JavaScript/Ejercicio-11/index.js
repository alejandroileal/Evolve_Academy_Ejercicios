import {
  vehiculos,
  agregarVehiculo,
  buscarVehiculoPorMarca,
  ordenarPorAño,
} from "./vehiculos.js";

agregarVehiculo("BMW", "X6", 2025);
agregarVehiculo("Toyota", "Corolla", 2022);
agregarVehiculo("Ford", "Mustang", 2023);
agregarVehiculo("Tesla", "Model Y", 2024);
agregarVehiculo("Audi", "A4", 2021);
agregarVehiculo("BMW", "X4", 2023);

console.log(vehiculos);

console.log("Buscar Por Marca: ", buscarVehiculoPorMarca("BMW"));

console.log("Ordenar Por Año: ", ordenarPorAño());
