const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  const trimedValue = nameInput.value.trim();
  if (trimedValue) {
    nameOutput.textContent = trimedValue;
  } else {
    nameOutput.textContent = "Anonymus";
  }
});
