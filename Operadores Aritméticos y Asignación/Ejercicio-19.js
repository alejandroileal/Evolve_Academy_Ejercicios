// Cálculo de la Letra del DNI

// Dado un array de números de DNI, escribe una función que:

// Asigne a cada DNI su letra correspondiente según una tabla de letras predefinida.

// Devuelva un array de objetos { dni, letra }.

const dnis = [12345678, 87654321, 11223344, 99887766];

const obtenerLetraDeDNI = (arrayDeDNIs) =>
  arrayDeDNIs.map((dni) => {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letra = letras[dni % 23];
    return { dni, letra };
  });

console.log(obtenerLetraDeDNI(dnis));
