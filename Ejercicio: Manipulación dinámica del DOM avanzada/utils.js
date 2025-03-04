export const createElement = (innerText) => {
  let pElement = document.createElement("p");
  pElement.textContent = innerText;

  console.log(pElement);
};
