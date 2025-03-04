// Asignación de Categorías según la Edad

// Dado un array de objetos (nombre, edad), escribe una función que:

// Agregue una propiedad categoria:

// "Infantil" si la edad es menor de 12.

// "Adolescente" si la edad está entre 12 y 17.

// "Adulto" si es 18 o más.

// Devuelva el array modificado.

const personas = [
  { nombre: "Alejandro", edad: 25 },
  { nombre: "María", edad: 15 },
  { nombre: "Carlos", edad: 13 },
  { nombre: "Sofía", edad: 17 },
  { nombre: "Javier", edad: 19 },
];

const asignarCategoría = (personas) =>
  personas.map((persona) =>
    persona.edad < 12
      ? { ...persona, categoria: "infantil" }
      : persona.edad > 12 && persona.edad <= 17
      ? { ...persona, categoria: "adolescente" }
      : { ...persona, categoria: "adulto" }
  );

console.log(asignarCategoría(personas));
