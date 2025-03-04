//  Identificar correos con dominio específico

// Escribe una función que reciba un array con direcciones de correo electrónico y devuelva un nuevo array que contenga solo aquellas direcciones que terminen en un dominio determinado, como "@empresa.com".

const correos = [
  "alejandro@empresa.com",
  "maria@gmail.com",
  "carlos@empresa.com",
  "sofia@yahoo.com",
  "javier@empresa.com",
];

const identificarDominioEnCorreo = (correos, dominio) =>
  correos.filter((correo) => correo.endsWith(dominio));

console.log(identificarDominioEnCorreo(correos, "@empresa.com"));
