import { mensajes, agregarMensaje, filtrarMensajes } from "./mensajería.js";

agregarMensaje("Alejandro", "Hola");
agregarMensaje("Andoni", "Hola!!");
agregarMensaje("Alejandro", "Cómo estás??");
agregarMensaje("Andoni", "Súper!!");
agregarMensaje("Alejandro", "Genial!");

console.log(mensajes);

console.log("Filtrar Por Usuario: ", filtrarMensajes("Alejandro"));
