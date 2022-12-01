const title = document.createElement("h1");

// inputs
// const intermediate = document.createElement("input");
const box = document.createElement("div");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");
const box4 = document.createElement("div");
const box5 = document.createElement("div");
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
const resultButton = document.createElement("button")
const one = document.createElement("button");
const two = document.createElement("button");
const three = document.createElement("button");
const four = document.createElement("button");
const five = document.createElement("button");
const six = document.createElement("button");
const seven = document.createElement("button");
const eight = document.createElement("button");
const nine = document.createElement("button");
const zero = document.createElement("button");
const comma = document.createElement("button");

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
one.classList.add("button");
two.classList.add("button");
three.classList.add("button");
four.classList.add("button");
five.classList.add("button");
six.classList.add("button");
seven.classList.add("button");
eight.classList.add("button");
nine.classList.add("button");
title.classList.add("h1");
prevValue.classList.add("p");

box.append(prevValue);
box.append(input);  
box.append(box1);
box.append(box2);
box.append(box3);
box.append(box4);
box.append(box5);
box1.append(percentButton);
box1.append(clearButton);
box1.append(squaredButton);
box1.append(divisionButton);
box2.append(one);
box2.append(two);
box2.append(three);
box2.append(multiplyButton);
box3.append(four);
box3.append(five);
box3.append(six);
box3.append(minusButton);
box4.append(seven);
box4.append(eight);
box4.append(nine);
box4.append(plusButton);
box5.append(comma);
box5.append(zero);
box5.append("");
box5.append(resultButton);
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
one.innerText = "1";
two.innerText = "2";
three.innerText = "3";
four.innerText = "4";
five.innerText = "5";
six.innerText = "6";
seven.innerText = "7";
eight.innerText = "8";
nine.innerText = "9";
zero.innerText = "0";
comma.innerText = ",";


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
    input.value = Number(left) / Number(input.value);
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
    prevValue.innerText = left + "%" + input.value;
    input.value = Number(input.value) * 100 / Number(left);
    left = input.value;
  } else {
    left = input.value;
    middle = '%';
    input.value = "";
  }
}

function clear(){
  middle = 'CE';
  left = "";
  input.value = "";
  prevValue.innerText = "";
}

clearButton.addEventListener("click", clear);

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

