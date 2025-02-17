// Sistema de Mensajería en Tiempo Real 📩

export const mensajes = [];

// Agregar mensajes con remitente y texto.

export const agregarMensaje = (remitente, texto) =>
  mensajes.push({ remitente, texto });

// Filtrar mensajes de un usuario (filter).

export const filtrarMensajes = (usuario) =>
  mensajes.filter((mensaje) => mensaje.remitente === usuario);
