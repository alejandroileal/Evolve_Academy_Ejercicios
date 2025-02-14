// Simulación de una Cola de Atención

// Implementa una cola de clientes:

const cola = ["Juan", "Ana", "Carlos"];

// Añade clientes al final de la cola usando push.

const agregarCliente = (cola, cliente) => cola.push(cliente);
agregarCliente(cola, "Kenia");
console.log(cola);

// Atiende clientes usando shift.

const atenderCliente = (cola) => cola.shift();

console.log(atenderCliente(cola));

// Muestra el siguiente cliente en ser atendido sin eliminarlo. (Decidí experimentar con un template string para simular la pantalla, por ejemplo, de un banco)

const mostrarSiguienteCliente = (cola) =>
  `El siguiente en ser atendido es ${cola[0]}`;

console.log(mostrarSiguienteCliente(cola));

// Cuenta cuántos clientes hay en la cola. (También aquí hice lo mismo con el template string)

const obtenerSiguienteCliente = (cola) =>
  `Quedan ${cola.length} clientes por ser atendidos.`;
