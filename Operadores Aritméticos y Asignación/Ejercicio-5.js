// Validación de Contraseñas con Múltiples Condiciones

// Crea una función que reciba una contraseña y valide que:

// Su longitud sea de al menos 8 caracteres.

// Contenga al menos una mayúscula y un número.

// No contenga espacios en blanco.

// Devuelva true si cumple todas las condiciones, false en caso contrario.

const validarContraseña = (contraseña) => {
  const contraseñaArray = contraseña.split("");
  const longitudCorrecta = contraseña.length >= 8;
  let contieneMayuscula = false;
  const contieneNumeros = contraseñaArray.some((caracter) =>
    "0123456789".includes(caracter)
  );

  const noContieneEspacios = contraseña.split(" ").length === 1;

  contraseñaArray.forEach((caracter) => {
    if (caracter === caracter.toUpperCase()) {
      contieneMayuscula = true;
    }
  });

  return (
    longitudCorrecta &&
    contieneMayuscula &&
    contieneNumeros &&
    noContieneEspacios
  );
};

console.log(validarContraseña("123Aa1111111111"));
