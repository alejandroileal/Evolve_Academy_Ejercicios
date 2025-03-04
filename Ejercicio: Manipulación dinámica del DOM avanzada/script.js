// 1

const createElement = (innerText) => {
  let pElement = document.createElement("p");
  pElement.textContent = innerText;
  pElement.className = "element";

  return pElement;
};

const createButtonElement = document.getElementById("createButton");
const containerNewsElement = document.getElementById("containerNews");

createButtonElement.addEventListener("click", () => {
  const currentElements = containerNewsElement.querySelectorAll(".element");

  containerNewsElement.appendChild(
    createElement(`Este es el elemento ${currentElements.length + 1}`)
  );
});

// 2

const insertionContainerElement = document.getElementById(
  "insertion-container"
);
const referenceElement = document.getElementById("reference-element");

const buttons = [
  {
    buttonId: "btn-insert-before",
    action: () =>
      insertionContainerElement.insertBefore(
        createElement("Creado elemento antes de referencia"),
        referenceElement
      ),
  },
  {
    buttonId: "btn-insert-after",
    action: () =>
      referenceElement.insertAdjacentElement(
        "afterend",
        createElement("Creado elemento después de referencia")
      ),
  },
  {
    buttonId: "btn-insert-begining",
    action: () =>
      insertionContainerElement.prepend(
        createElement("Creado elemento al inicio")
      ),
  },
  {
    buttonId: "btn-insert-last",
    action: () =>
      insertionContainerElement.append(
        createElement("Creado elemento al final")
      ),
  },
];

buttons.forEach((buttonObject) => {
  const { buttonId, action } = buttonObject;
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", action);
  }
});

// 3

const deleteablesContainer = document.getElementById("container-deleteables");
const deleteableElements = deleteablesContainer.getElementsByTagName("p");
const deleteButtonElement = document.getElementById("btn-delete");

deleteButtonElement.addEventListener("click", () => {
  const deleteableElementsLength = deleteableElements.length;

  if (deleteableElementsLength > 0) {
    deleteableElements[deleteableElementsLength - 1].remove();
  } else {
    alert("No se puede eliminar elementos de una lista vacía");
  }
});

// 4

const replaceContainerElement = document.getElementById("replace-container");

const replaceButton = document.getElementById("btn-replace");

let counter = 0;

replaceButton.addEventListener("click", () => {
  const elementToBeReplaced = replaceContainerElement.querySelector(".element");

  ++counter;
  elementToBeReplaced.replaceWith(
    createElement(`Elemento Reemplazado Número ${counter}`)
  );
});
