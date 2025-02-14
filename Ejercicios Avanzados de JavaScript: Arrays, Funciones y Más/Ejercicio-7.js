// Combinar Listas de Contactos (Operador Spread)

const contactos1 = ["Juan", "Carlos", "Ana"];
const contactos2 = ["Ana", "Pedro", "Luis"];

// Combina dos listas de contactos sin duplicados:

const listasCombinadas = [...contactos1, ...contactos2];

// console.log(listasCombinadas);

// Usa Set y el operador spread para eliminar duplicados.

const listaSinDuplicados = [...new Set([...contactos1, ...contactos2])];

// console.log(listaSinDuplicados);

// Ordena alfabéticamente la lista combinada.

const listaCombinadaAlfabéticamente = listasCombinadas.sort();

// console.log(listaCombinadaAlfabéticamente);
