// Extraer y formatear nombres de usuario

// Dado un array de correos electrónicos, extraer los nombres de usuario (antes del @) y devolverlos en un array formateados con la primera letra en mayúscula y el resto en minúscula.

const correos = [
  "alejandro@empresa.com",
  "maria@gmail.com",
  "carlos@empresa.com",
  "sofia@yahoo.com",
  "javier@empresa.com",
];

const extraerUsuario = (correos) =>
  correos.map((correo) => {
    const usuario = correo.split("@")[0];
    return usuario.charAt(0).toUpperCase() + usuario.slice(1);
  });

console.log(extraerUsuario(correos));
