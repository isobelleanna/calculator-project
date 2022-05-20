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
const operators = document.querySelectorAll(".button-operation")
const buttonPlus = document.getElementById("button-plus");
const buttonSubtract = document.getElementById("button-subtract");
const buttonMultiply = document.getElementById("button-multiply");
const buttonDivide = document.getElementById("button-divide");

console.log(operators)

const result = "0";
const calculation = "";
const value = [];
const num1 = "";
const num2 = "";
const operator = "";

resultHeading.innerText = result;
calculationHeading.innerText = calculation;
/*
const onClickoperators = (event) => {
    console.log("I am an operator");
};
*/

const onClick0 = (event) => {
    calculationHeading.innerText += "0";
};

const onClick1 = (event) => {
    calculationHeading.innerText += "1";
    //console.log(1);
};
const onClick2 = (event) => {
    calculationHeading.innerText += "2";
    //console.log(2);
};
const onClick3 = (event) => {
    calculationHeading.innerText += "3";
    //console.log(3);
};
const onClick4 = (event) => {
    calculationHeading.innerText += "4";
    //console.log(4);
};
const onClick5 = (event) => {
    calculationHeading.innerText += "5";
    //console.log(5);
};
const onClick6 = (event) => {
    calculationHeading.innerText += "6";
    //console.log(6);
};
const onClick7 = (event) => {
    calculationHeading.innerText += "7";
    //console.log(7);
};
const onClick8 = (event) => {
    calculationHeading.innerText += "8";
    //console.log(8);
};
const onClick9 = (event) => {
    calculationHeading.innerText += "9";
    //console.log(9);
};

const onClickPlus = (event) => {
    calculationHeading.innerText += "+";
    //console.log(9);
};

const onClickSubtract = (event) => {
    calculationHeading.innerText += "-";
    //console.log(9);
};

const onClickMultiply = (event) => {
    calculationHeading.innerText += "x";
    //console.log(9);
};

const onClickDivide = (event) => {
    calculationHeading.innerText += "÷";
    //console.log(9);
};

const onClickClear = (event) => {
    resultHeading.innerText = "0";
    calculationHeading.innerText = "";
    //console.log(0);
};

const onClickEqualsCalculate = (event) => {
    //console.log(calculationHeading.innerText);
     if(calculationHeading.innerText.includes("+")){
        splitStringPlus();
    }else if (calculationHeading.innerText.includes("-")){
        splitStringSubtract();
    }else if (calculationHeading.innerText.includes("x")){
        splitStringMultiply();
    }else if (calculationHeading.innerText.includes("÷")){
        splitStringDivide();
    }
    
    //calculate(3, "+", 67);
};


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
buttonPlus.addEventListener("click", onClickPlus);
buttonSubtract.addEventListener("click", onClickSubtract);
buttonMultiply.addEventListener("click", onClickMultiply);
buttonDivide.addEventListener("click", onClickDivide);
buttonClear.addEventListener("click", onClickClear);
buttonEqual.addEventListener("click", onClickEqualsCalculate);
//operators.addEventListener("click", onClickoperators);


const splitStringPlus = (string) => {
    const plusArray = calculationHeading.innerHTML.split("+")
    const plusArrayNumbers = plusArray.map(string => Number(string));
    const sumOfArray = plusArrayNumbers.reduce((runningTotal, currentVal) => {
        return runningTotal + currentVal
    })
    resultHeading.innerText = sumOfArray;
}

const splitStringSubtract = (string) => {
    const subtractArray = calculationHeading.innerHTML.split("-")
    const subtractArrayNumbers = subtractArray.map(string => Number(string));
    let total = subtractArrayNumbers[0] - subtractArrayNumbers[1];
    resultHeading.innerText = total;
}

const splitStringMultiply = (string) => {
    const subtractArray = calculationHeading.innerHTML.split("x")
    const subtractArrayNumbers = subtractArray.map(string => Number(string));
    let total = subtractArrayNumbers[0] * subtractArrayNumbers[1];
    resultHeading.innerText = total;
}

const splitStringDivide = (string) => {
    const subtractArray = calculationHeading.innerHTML.split("÷")
    const subtractArrayNumbers = subtractArray.map(string => Number(string));
    let total = subtractArrayNumbers[0] / subtractArrayNumbers[1];
    resultHeading.innerText = total;
}


