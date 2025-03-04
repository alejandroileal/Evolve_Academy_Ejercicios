// Modificar el texto de un párrafo mediante su ID ✍️

// Objetivo:
// Selecciona un párrafo con el id "miParrafo" y cambia su contenido de texto a "Este es un párrafo modificado mediante JavaScript". Usa document.getElementById() para seleccionar el elemento y la propiedad textContent para cambiar su contenido.

const pElement = document.getElementById("miParrafo");
pElement.textContent = "Este es un párrafo modificado mediante JavaScript";

// Cambiar el color de fondo de un contenedor con clase 🎨

// Objetivo:
// Selecciona el primer div con la clase "contenedor" y cambia su color de fondo a un color hexadecimal como #f7f7f7. Usa document.querySelector() para seleccionar el primer div con esa clase y modifica su propiedad style.backgroundColor.

const firstDivElement = document.querySelector("div");
firstDivElement.style.backgroundColor = "#f7f7f7";

// Contar los elementos de una lista utilizando su clase 🔢

// Objetivo:
// Cuenta cuántos elementos en el documento tienen la clase "activo". Usa document.getElementsByClassName() para obtener todos los elementos con esa clase y la propiedad length para contar cuántos hay.

const activeElements = document.getElementsByClassName("activo");
console.log(`Hay ${activeElements.length} elementos con la clase 'activo'`);

// Cambiar el atributo href de un enlace específico 🔗

// Objetivo:
// Selecciona un enlace con el id "miEnlace" y cambia su atributo href a "https://www.nuevaurl.com". Usa document.getElementById() para obtener el enlace y setAttribute() para modificar el atributo href.

const aElement = document.getElementById("miEnlace");
aElement.setAttribute("href", "https://www.nuevaurl.com");

// Modificar el texto de todos los elementos con la misma clase ✨

// Objetivo:
// Selecciona todos los elementos con la clase "modificar" y cambia su contenido de texto a "Texto modificado". Usa document.querySelectorAll() para obtener los elementos y un bucle forEach para modificar su textContent.

const elementsWithClassModificar = document.querySelectorAll(".modificar");

for (let i = 0; i < elementsWithClassModificar.length; i++) {
  elementsWithClassModificar[i].textContent = `Texto modificado ${i + 1}`;
}

// Cambiar el color de fondo de un div al pasar el ratón por encima 🖱

// Objetivo:
// Selecciona un div con el id "miDiv" y cambia su color de fondo a #f0f0f0 cuando el ratón pase por encima de él. Usa addEventListener() para escuchar el evento mouseover y mouseout y cambia la propiedad style.backgroundColor.

const divElement = document.getElementById("miDiv");

divElement.addEventListener("mouseover", () => {
  divElement.style.backgroundColor = "#f0f0f0";
});

divElement.addEventListener("mouseout", () => {
  divElement.style.backgroundColor = "lightblue";
});

// Cambiar el contenido de un enlace 🔗

// Objetivo:
// Selecciona un enlace con el id "miEnlace" y cambia su texto a "Enlace modificado". Usa document.getElementById() para seleccionar el enlace y textContent para cambiar su texto.

const aElementSelected = document.getElementById("miEnlace");
aElementSelected.textContent = "Este es el texto del enlace modificado";

// Obtener todos los elementos de un tipo específico 📑

// Objetivo:
// Selecciona todos los elementos p dentro del documento. Usa document.getElementsByTagName() para obtener todos los elementos p y recógelos en una lista o colección.

const pElements = document.getElementsByTagName("p");

[...pElements].forEach((element, index) =>
  console.log(`Párrafo ${index}: ${element.textContent}`)
);

// Obtener y mostrar la clase de un elemento 🧐

// Objetivo:
// Selecciona un div con el id "miDiv" y muestra en consola su clase usando className. Utiliza document.getElementById() para seleccionar el div.

const divElementSelected = document.getElementById("miDiv");
console.log(divElement.className);

// Comprobar la existencia de un elemento por su ID 🔍

// Objetivo:
// Comprueba si un elemento con el id "miElemento" existe en el DOM. Si existe, muestra en consola "Elemento encontrado", si no, muestra "Elemento no encontrado". Usa document.getElementById() para realizar la comprobación.

const myElement = document.getElementById("miElemento");
console.log(myElement ? "Elemento encontrado" : "Elemento no encontrado");

// Recorrer una colección de elementos con una clase específica 🔄

// Objetivo:
// Selecciona todos los elementos con la clase "item" y recorre la colección para mostrar sus textos en consola. Usa document.getElementsByClassName() para seleccionar los elementos y forEach para recorrerlos (si es una NodeList).

const itemElements = document.getElementsByClassName("item");

[...itemElements].forEach((element) => {
  console.log(element.textContent);
});

// Obtener el primer elemento con una clase y modificar su texto 🔧

// Objetivo:
// Selecciona el primer elemento con la clase "primero" y cambia su texto a "Elemento modificado". Usa document.querySelector() para obtener el primer elemento con esa clase y textContent para cambiar su texto.

const element = document.querySelector(".primero");
element.textContent = "Elemento modificado";

// Verificar si un elemento contiene una clase específica ✅

// Objetivo:
// Selecciona un div con el id "miDiv" y verifica si tiene la clase "activo". Usa document.getElementById() y la propiedad classList.contains() para realizar la verificación.

const myDivElement = document.getElementById("miDiv");
console.log(myDivElement.classList.contains("activo"));

// Obtener todos los enlaces dentro de una lista 📋

// Objetivo:
// Selecciona todos los elementos a dentro de un ul con la clase "lista" y muestra en consola los href de cada enlace. Usa document.querySelectorAll() para obtener todos los enlaces y luego recórrelos con un bucle forEach.

const aElemts = document.querySelectorAll(".lista a");

console.log("Lista de enlaces y sus href:");
aElemts.forEach((enlace, index) => {
  console.log(`Enlace ${index + 1}: ${enlace.href}`);
});

// Cambiar la visibilidad de un elemento con un ID específico 👀

// Objetivo:
// Selecciona un div con el id "miDiv" y cambia su visibilidad entre none (oculto) y block (visible) usando style.display. Usa document.getElementById() para seleccionar el div y la propiedad style.display para modificar su visibilidad.

const mainDivElement = document.getElementById("miDiv1");
mainDivElement.style.display = "none";
