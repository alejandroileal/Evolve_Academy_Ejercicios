// Transformación de Objetos con Valores Modificados

// Dado un array de objetos (usuario, nivel), escribe una función que:

// Convierta los niveles "básico" a "intermedio", y los "intermedio" a "avanzado".

// Devuelva el array actualizado.

const usuarios = [
  { usuario: "Alejandro", nivel: "básico" },
  { usuario: "María", nivel: "intermedio" },
  { usuario: "Carlos", nivel: "avanzado" },
  { usuario: "Sofía", nivel: "básico" },
  { usuario: "Javier", nivel: "intermedio" },
];

const transformarNivel = (usuarios) =>
  usuarios.map((usuario) =>
    usuario.nivel === "básico"
      ? { ...usuario, nivel: "intermedio" }
      : usuario.nivel === "intermedio"
      ? { ...usuario, nivel: "avanzado" }
      : { ...usuario }
  );

console.log(transformarNivel(usuarios));
