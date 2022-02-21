const calculateBtn = document.querySelector("ion-button");
const Reset = document.getElementById("Reset");
const heightInput = document.getElementById("InputHeight");
const WeightInput = document.getElementById("InputWeight");
const resultArea = document.getElementById("result");
const resetInp = () => {
  heightInput.value = "";
  WeightInput.value = "";
};

const calculateBmi = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +WeightInput.value;
  const bmi = enteredWeight / (enteredHeight * enteredHeight);

  if (isNaN(bmi)) {
    alert("not a number");
    return;
  }

  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
    <ion-card-content>
    <h2>${bmi}</h2>
    </ion-card-content>
    `;
  resultArea.innerHTML = "";
  resultArea.appendChild(resultElement);
};

document.getElementById("Submit").addEventListener("click", calculateBmi);
Reset.addEventListener("click", resetInp);
