const input = document.querySelector(".inputNumber");
const oneMoreBtn = document.querySelector(".oneMore");
const readyBtn = document.querySelector(".ready");
const error = document.querySelector(".errorMessage");
const result = document.querySelector(".result");
const sum = document.querySelector(".sum");

let arr = [];

const addOne = () => {
  let number = Number(input.value);
  if (number) {
    arr.push(number);
    error.innerHTML = "";
  } else {
    error.innerHTML = "Error";
  }

  result.innerHTML = arr;
  input.value = "";
};

const getSum = () => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  sum.innerHTML = res;
};

oneMoreBtn.addEventListener("click", addOne);
readyBtn.addEventListener("click", getSum);
