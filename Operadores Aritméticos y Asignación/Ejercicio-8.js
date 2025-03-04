// Verificación de Paridad con Operador Bitwise

// Escribe una función que reciba un número y determine si es par o impar usando &.
// 💡 Pista: n & 1 devuelve 0 si n es par, y 1 si es impar.

const verificarParidad = (numero) => ((numero & 1) === 0 ? "Par" : "Impar");

console.log(verificarParidad(3));
