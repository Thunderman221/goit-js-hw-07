// Функція для отримання випадкового кольору в форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Обробник події для кнопки Destroy
destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
