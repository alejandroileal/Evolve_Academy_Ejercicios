// Eliminación de Elementos según una Condición

// Dado un array de objetos (nombre, edad), crea una función que:

// Elimine del array a las personas menores de 18 años.

// Devuelva el nuevo array filtrado.

const personas = [
  { nombre: "Alejandro", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Sofía", edad: 22 },
  { nombre: "Javier", edad: 16 },
];

const filtrarMenoresDeEdad = (personas) =>
  personas.filter((persona) => persona.edad > 18);

console.log(filtrarMenoresDeEdad(personas));
