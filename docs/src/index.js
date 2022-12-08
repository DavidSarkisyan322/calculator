const title = document.createElement("h1");

// inputs
const box = document.createElement("div");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
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
const clearButton = document.createElement("button");
const resultButton = document.createElement("button");

//classes

box.classList.add("box");
input.classList.add("input");
plusButton.classList.add("action");
minusButton.classList.add("action");
multiplyButton.classList.add("action");
divisionButton.classList.add("action");
squaredButton.classList.add("action");
percentButton.classList.add("action");
resultButton.classList.add("action");
clearButton.classList.add("action");
title.classList.add("h1");
prevValue.classList.add("p");

box.append(prevValue);
box.append(input);  
box.append(box1);
box.append(box2);
box1.append(plusButton);
box1.append(multiplyButton);
box1.append(squaredButton);
box1.append(clearButton);
box2.append(minusButton);
box2.append(divisionButton);
box2.append(percentButton);
box2.append(resultButton);
document.body.append(title);
document.body.append(box);



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
clearButton.innerText = "C"


// funstions
function plus() { 
  if(left){
    prevValue.innerText = left + "+" + input.value;
    input.value = Number(input.value) + Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '+';
    input.value = "";
  }
}

plusButton.addEventListener("click", plus);

function multiply() {
  if(left){
    prevValue.innerText = left + "*" + input.value;
    input.value = Number(left) * Number(input.value);
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
    prevValue.innerText = left + "/" + input.value;
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
    prevValue.innerText = left + "-" + input.value;
    input.value = Number(left) - Number(input.value);
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
    prevValue.innerText = left + "**" + input.value;
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
    prevValue.innerText = input.value + "%" + input.value;
    input.value = Number(input.value) * 100 / Number(left) + "%";
    left = input.value;
  } else {
    left = input.value;
    middle = '%';
    input.value = "";
  }
}

percentButton.addEventListener("click", percent);

function clear(){
  middle = 'CE';
  left = "";
  input.value = "";
  prevValue.innerText = "";
}

clearButton.addEventListener("click", clear);

function result() {
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

