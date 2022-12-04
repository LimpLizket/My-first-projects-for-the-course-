const brands = document.querySelector("#brands");
const models = document.querySelector("#models");
const result = document.querySelector(".result");
const ageCheck = document.querySelector("#howOld");
const ageBtns = document.querySelectorAll('input[name="carAge"]');
const engineSize = document.querySelector("#engine");

let audiModels = ["A3", "A4", "A6", "Q7"];
let mercedesModels = ["EQS", "CLS", "CLA", "G-Class"];
let bmwModels = ["X5", "X6", "M4", "M8"];
let porscheModels = ["911", "Panamera", "Taycan", "Cayenne"];

const selectBrand = () => {
  if (brands.value == "0") {
    models.style.display = "none";
    ageCheck.style.display = "none";
  } else {
    models.style.display = "block";
    ageCheck.style.display = "block";
  }

  let options = "";
  if (brands.value == "300") {
    for (let model of audiModels) {
      options += `<option value='1000'>${model}</option>`;
    }
  }
  if (brands.value == "400") {
    for (let model of mercedesModels) {
      options += `<option value='1500'>${model}</option>`;
    }
  }
  if (brands.value == "500") {
    for (let model of bmwModels) {
      options += `<option value='2000'>${model}</option>`;
    }
  }
  if (brands.value == "600") {
    for (let model of porscheModels) {
      options += `<option value='3000'>${model}</option>`;
    }
  }

  models.innerHTML = options;
};

const selectAge = () => {
  let selectedAge;
  for (const ageBtn of ageBtns) {
    if (ageBtn.checked) {
      selectedAge = ageBtn.value;
    }
  }
  ageBtns.value = selectedAge;
};

let enginePrice = [];
const selectSize = () => {
  let number = Number(engineSize.value);
  if (number >= 1000) {
    enginePrice.push(number * 50);
  } else {
    alert(`Too small engine capacity, should be >= 1000 cm³`);
  }
};

const getSum = () => {
  if (ageBtns.value > 0 && brands.value > 0 && engineSize.value >= 1000) {
    result.innerHTML = `Your price: USD ${
      +brands.value + +models.value + +ageBtns.value + +enginePrice
    }`;
    engineSize.value = "";
    enginePrice.length = 0;
  } else {
    result.innerHTML = `You have left an empty parameter or put a wrong definition`;
  }
};
