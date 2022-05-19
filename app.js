const resultHeading = document.getElementById("result");
const calculationHeading = document.getElementById("calculation");
const button0 = document.getElementById("button-0");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const buttonClear = document.getElementById("button-clear");
const buttonEqual = document.getElementById("button-equal");
//const operators = document.querySelector(".button-operation")
const buttonPlus = document.getElementById("button-plus");

const result = 12064;
const calculation = "1 + 2 =";
const value = [];

/////Psuedo Code
//if (operator = "add")
//else if (operator = "subtract")
//else if (operator = "multiply")
//else if (operator = "divide")

const onClick0 = (event) => {
    console.log(0);
};

const onClick1 = (event) => {
    //return value.push(1);
    console.log(1);
};
const onClick2 = (event) => {
    console.log(2);
};
const onClick3 = (event) => {
    console.log(3);
};
const onClick4 = (event) => {
    console.log(4);
};
const onClick5 = (event) => {
    console.log(5);
};
const onClick6 = (event) => {
    console.log(6);
};
const onClick7 = (event) => {
    console.log(7);
};
const onClick8 = (event) => {
    console.log(8);
};
const onClick9 = (event) => {
    console.log(9);
};

const onClickClear = (event) => {
    console.log(0);
};

const onClickEqualsCalculate = (event) => {
    console.log("Now calculating");
};

resultHeading.innerText = result;
calculationHeading.innerText = calculation;

button0.addEventListener("click", onClick0);
button1.addEventListener("click", onClick1);
button2.addEventListener("click", onClick2);
button3.addEventListener("click", onClick3);
button4.addEventListener("click", onClick4);
button5.addEventListener("click", onClick5);
button6.addEventListener("click", onClick6);
button7.addEventListener("click", onClick7);
button8.addEventListener("click", onClick8);
button9.addEventListener("click", onClick9);
buttonClear.addEventListener("click", onClickClear);
buttonEqual.addEventListener("click", onClickEqualsCalculate);

const calculate = (num1, operator, num2) => {
    let result = 0;
    if (operator === "add") {
        result = num1 + num2;
    }else if (operator === "subtract") {
        result = num1 - num2;
    }else if (operator === "multiply") {
        result = num1 * num2;
    }else if (operator === "divide") {
        result = num1 / num2;
    }
    console.log(result);
}
calculate(3, "add", 67);