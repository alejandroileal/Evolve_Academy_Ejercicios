// Mostrar un mensaje con el evento click en un botón 🖱️

// Enunciado: Crea un botón en tu página HTML. Utiliza el evento click para que, cuando el usuario haga clic sobre el botón, se muestre un mensaje en una ventana de alert con un texto personalizado como "¡Botón presionado!".

const firstButton = document.getElementById("first-button");

firstButton.addEventListener("click", () => {
  alert("¡Botón presionado!");
});

// Cambiar la imagen con el evento dblclick 🖼️

// Enunciado: Inserta una imagen en la página. Utiliza el evento dblclick para cambiar la imagen cuando el usuario haga doble clic sobre ella. Puedes cambiar la imagen a otra diferente al hacer doble clic.

const imgDoubleClickElement = document.getElementById("img-double-click");
imgDoubleClickElement.addEventListener("dblclick", (event) => {
  const targetElement = event.target;
  targetElement.src =
    targetElement.src ===
    "https://puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg"
      ? "https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D"
      : "https://puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg";
});

// Detectar el movimiento del ratón con mousemove 🐭

// Enunciado: Crea un área en tu página web. Usa el evento mousemove para ejecutar una acción cada vez que el ratón se mueva dentro de esa área. Por ejemplo, puedes mostrar un mensaje de alert cada vez que se mueva el ratón.

const moveAreaElement = document.getElementById("moveArea");

moveAreaElement.addEventListener("mousemove", () => {
  moveAreaElement.firstElementChild.textContent = "Moviste";
});

// Cambiar el color de fondo con mousedown y mouseup 🖱️

// Enunciado: Crea un botón en la página. Utiliza los eventos mousedown y mouseup para cambiar el color de fondo del botón cuando el usuario presione y suelte el botón del ratón. Puedes asignar colores diferentes para cada acción.

const buttonElement = document.getElementById("ex-4-button");

buttonElement.addEventListener("mousedown", () => {
  buttonElement.style.backgroundColor = "yellow";
});

buttonElement.addEventListener("mouseup", () => {
  buttonElement.style.backgroundColor = "green";
});

// Contar caracteres con el evento input en un campo de texto ⌨️

// Enunciado: Crea un campo de texto en el HTML. Utiliza el evento input para mostrar en tiempo real la cantidad de caracteres que el usuario ha escrito en el campo. Este contador debe actualizarse a medida que el texto se modifica.

const textInput = document.getElementById("text-input");
const textLengthElement = document.getElementById("text-length-p");

textInput.addEventListener("input", (e) => {
  textLengthElement.textContent = `Caracteres: ${e.target.value.length}`;
});

// Mostrar un valor seleccionado con el evento change en un selector <select> 📜

// Enunciado: Crea un menú desplegable con varias opciones. Usa el evento change para mostrar un mensaje que indique el valor de la opción seleccionada cada vez que el usuario cambie la selección.

const selectElement = document.getElementById("miSelect");
const resultElement = document.getElementById("option-result");

selectElement.addEventListener("change", (e) => {
  resultElement.textContent =
    e.target.value.length > 0 ? e.target.value : "Nada seleccionado";
});

// Cambiar el borde de un campo con focus y blur 🔲

// Enunciado: Crea un campo de texto en la página. Utiliza los eventos focus y blur. Cuando el campo reciba el foco (focus), cambia el borde a verde. Cuando pierda el foco (blur), cambia el borde a rojo.

const textInputE7 = document.getElementById("text-input-e7");

textInputE7.addEventListener("focus", () => {
  textInputE7.style.outlineColor = "green";
});

textInputE7.addEventListener("blur", () => {
  textInputE7.style.borderColor = "red";
});

// Mostrar el tamaño de la ventana con el evento resize 🌐

// Enunciado: Utiliza el evento resize para detectar cambios en el tamaño de la ventana del navegador. Cada vez que el usuario cambie el tamaño de la ventana, muestra un mensaje con las nuevas dimensiones.

const spanOne = document.getElementById("span-1");
const spanTwo = document.getElementById("span-2");

const getScreenDimentions = () => {
  spanOne.textContent = window.innerHeight;
  spanTwo.textContent = window.innerWidth;
};

window.addEventListener("resize", getScreenDimentions);

getScreenDimentions();

// Mostrar un mensaje al desplazar la página con scroll ⬇️

// Enunciado: Crea una página con mucho contenido. Usa el evento scroll para mostrar un mensaje cada vez que el usuario empuje la barra de desplazamiento de la página hacia abajo. Puedes mostrar un simple mensaje como "Desplazamiento detectado".

const pMessageElement = document.getElementById("ex-9-p");

window.addEventListener("scroll", () => {
  pMessageElement.textContent =
    pMessageElement.textContent === "Desplazamiento detectado"
      ? "Desplazamiento detectado de nuevo"
      : "Desplazamiento detectado";
});

// Manejo de múltiples botones con addEventListener 🔘

// Enunciado: Crea varios botones en tu página. Utiliza addEventListener para asignar el evento click a cada uno de ellos. Cada vez que el usuario haga clic en un botón, muestra un mensaje de alert indicando el nombre del botón presionado (por ejemplo, "Botón 1", "Botón 2", etc.).

const buttons = [
  { name: "buttonOne", element: document.getElementById("button-1") },
  { name: "buttonTwo", element: document.getElementById("button-2") },
  { name: "buttonThree", element: document.getElementById("button-3") },
  { name: "buttonFour", element: document.getElementById("button-4") },
];

const buttonCallback = (e) => {
  alert(e.target.textContent);
};

buttons.forEach((button) => {
  button.element.addEventListener("click", buttonCallback);
});

// Múltiples eventos en un div con addEventListener 🎨

// Enunciado: Crea un div en la página y usa el evento mouseenter para cambiar el color de fondo a verde cuando el ratón entre en el área del div, y usa el evento mouseleave para devolver el color de fondo a su estado original cuando el ratón salga del área.

const changeColorDivElement = document.getElementById("e-7-div");

changeColorDivElement.addEventListener("mouseenter", () => {
  changeColorDivElement.style.backgroundColor = "blue";
});

changeColorDivElement.addEventListener("mouseleave", () => {
  changeColorDivElement.style.backgroundColor = "aqua";
});

// Detectar teclas presionadas con keydown y keyup ⌨️

// Enunciado: Crea un campo de texto en tu página. Usa los eventos keydown y keyup para mostrar un mensaje de alert cada vez que el usuario presione o suelte una tecla en el campo de texto.

const inputElementE12 = document.getElementById("input-e-12");

inputElementE12.addEventListener("keydown", () => {
  alert("Presionaste una tecla");
});

inputElementE12.addEventListener("keydown", () => {
  alert("Soltaste la tecla");
});

// Cambiar el color de fondo de un elemento con mouseover y mouseout 🖱️

// Enunciado: Crea un div y usa los eventos mouseover y mouseout para cambiar el color de fondo del div cuando el ratón entre o salga de él. El fondo puede cambiar a un color específico al pasar el ratón y volver al color original al quitarlo.

const colorChangeDiv = document.getElementById("e-13-div");

colorChangeDiv.addEventListener("mouseover", () => {
  colorChangeDiv.style.backgroundColor = "yellow";
});

colorChangeDiv.addEventListener("mouseout", () => {
  colorChangeDiv.style.backgroundColor = "aqua";
});

// Evitar que un formulario se envíe con submit 📝

// Enunciado: Crea un formulario con un campo de texto y un botón de envío. Usa el evento submit para evitar que el formulario se envíe si el campo de texto está vacío, mostrando un mensaje que indique que el campo es obligatorio.

const errorMessageElement = document.getElementById("error-message");
const successfulMessageElement = document.getElementById("successful-message");
const formElement = document.getElementById("e-14-form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const { value } = e.target.querySelector("#sample-text");

  if (!value) {
    errorMessageElement.style.display = "block";
    successfulMessageElement.style.display = "none";
  } else {
    errorMessageElement.style.display = "none";
    successfulMessageElement.style.display = "block";
  }
});

// Deshabilitar un botón con el evento input en un campo de texto ⬇️

// Enunciado: Crea un campo de texto y un botón en la página. Usa el evento input para deshabilitar el botón si el campo de texto está vacío, y habilitarlo si el campo contiene texto. Esto evita que el usuario haga clic en el botón cuando el campo está vacío.

const inputE15 = document.getElementById("e-15-input");
const buttonE15 = document.getElementById("e-15-button");

inputE15.placeholder = "Escribe para activar";

inputE15.addEventListener("input", (e) => {
  buttonE15.disabled = e.target.value.length === 0;
});
