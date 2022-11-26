// import ".styles.css";

const title = document.createElement("h1");

// inputs
// const intermediate = document.createElement("input");
const input = document.createElement("input");

const prevValue = document.createElement("p");

let left;
let middle;
let right;

// controls
const plusButton = document.createElement("button");
const minusButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const divisionButton = document.createElement("button");
const squaredButton = document.createElement("button");
const percentButton = document.createElement("button");
const resultButton = document.createElement("button")

// attributes
input.type = "number";
// intermediate.type = "number"
title.innerText = "Calculator";
plusButton.innerText = "+";
minusButton.innerText = "-";
multiplyButton.innerText = "*";
divisionButton.innerText = "/";
squaredButton.innerText = "**";
percentButton.innerText = "%";
resultButton.innerText = "=";


// funstions
function plus() { 
  if(left){
    prevValue.innerText = left;
    input.value = Number(input.value) + Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '+';
    input.value = "";
  }
}
    
  // console.log(input.value);

plusButton.addEventListener("click", plus);

function multiply() {
  if(left){
    prevValue.innerText = left;
    input.value = Number(input.value) * Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '*';
    input.value = "";
  }
}

multiplyButton.addEventListener("click", multiply);

function division() {
  if(left){
    prevValue.innerText = left;
    input.value = Number(input.value) / Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '/';
    input.value = "";
  }
}

divisionButton.addEventListener("click", division);

function minus() {
  if(left){
    prevValue.innerText = left;
    input.value = Number(input.value) - Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '-';
    input.value = "";
  }
}

minusButton.addEventListener("click", minus);

function squared() {
  if(left){
    prevValue.innerText = left;
    input.value = Number(input.value) ** Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '**';
    input.value = "";
  }
}

squaredButton.addEventListener("click", squared);

function percent(){
  if(left){
    prevValue.innerText = left;
    input.value = Number(input.value) ** Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '**';
    input.value = "";
  }
}

percentButton.addEventListener("click", percent);

function result() {
  console.log(left, middle)
  if (middle === "+"){
    input.value = Number(left) + Number(input.value)
  }
  if (middle === "*"){
    input.value = Number(left) * Number(input.value)
  }
  if (middle === "/"){
    input.value = Number(left) / Number(input.value)
  }
  if (middle === "-"){
    input.value = Number(left) - Number(input.value)
  }
  if (middle === "**"){
    input.value = Number(left) ** Number(input.value)
  }
  if (middle === "%"){
    input.value = Number(left) * 100 / Number(input.value)
  }
  
}
resultButton.addEventListener("click", result);

// mount
document.body.append(title);
document.body.append(prevValue);
document.body.append(input);
document.body.append(plusButton);
document.body.append(multiplyButton);
document.body.append(divisionButton);
document.body.append(minusButton);
document.body.append(squaredButton);
document.body.append(percentButton);
document.body.append(resultButton);
