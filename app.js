///--------------------------------------------Variables---------------------------------------------------

const resultHeading = document.getElementById("result");
const calculationHeading = document.getElementById("calculation");
const numberButtons = document.querySelectorAll(".button-number")
const buttonClear = document.getElementById("button-clear");
const buttonEqual = document.getElementById("button-equal");
const operators = document.querySelectorAll(".button-operation");
const buttonDecimal = document.getElementById("button-decimal");
const buttonPercentage = document.getElementById("button-percentage");
const buttonNegative = document.getElementById("button-negative");

let firstOperator = false;
const numberToCalculate = [];
const operatorsToCalculate = [];

///-----------------------------------------Onclick functions------------------------------------------------

const onClicknumber = (event) => {
    calculationHeading.innerText += event.target.innerText;
    resultHeading.innerText += event.target.innerText;
};

const onClickoperators = (event) => {
    if(resultHeading.innerText === ""){
        calculationHeading.innerText = "";
        //resultHeading.innerText = "";
    }
    const currentVal = resultHeading.innerText
    numberToCalculate.push(currentVal)
    operatorsToCalculate.push(event.target.innerHTML)
    resultHeading.innerText = "";
    console.log(numberToCalculate);
    calculationHeading.innerText += event.target.innerHTML;
    if(numberToCalculate.length > 1) {
        console.log(1);
    }

};

const onClickClear = (event) => {
    resultHeading.innerText = "";
    calculationHeading.innerText = "";
    while(numberToCalculate.length > 0) {
         numberToCalculate.pop();
        }
    console.log(numberToCalculate);
};

const onClickDecimal = (event) => {
    if(resultHeading.innerText === ""){
        calculationHeading.innerText += "0";
        resultHeading.innerText += "0";
    }
    if(!resultHeading.innerHTML.includes(".")){
        calculationHeading.innerText += event.target.innerText;
        resultHeading.innerText += event.target.innerText;
    }
    
};

const onClickEqualsCalculate = (event) => {
     if(calculationHeading.innerText.includes("+")){
        splitStringPlus();
    }else if (calculationHeading.innerText.includes("-")){
        splitStringSubtract();
    }else if (calculationHeading.innerText.includes("x")){
        splitStringMultiply();
    }else if (calculationHeading.innerText.includes("÷")){
        splitStringDivide();
    }
    
};
const onClickPercentage = (event) => {
    let number = parseInt(calculationHeading.innerText);
    calculationHeading.innerText = number /100;
    resultHeading.innerText = number /100;
};

const onClickNegative = (event) => {
    let number = parseInt(calculationHeading.innerText);
    calculationHeading.innerText = number - (number * 2);
    resultHeading.innerText = number - (number * 2);
};
// 

///------------------------------------------Event listeners----------------------------------------------------
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", onClicknumber);
})
operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", onClickoperators);
})
buttonClear.addEventListener("click", onClickClear);
buttonEqual.addEventListener("click", onClickEqualsCalculate);
buttonDecimal.addEventListener("click", onClickDecimal);
buttonPercentage.addEventListener("click", onClickPercentage);
buttonNegative.addEventListener("click", onClickNegative);

///------------------------------------------Calculator Functions-----------------------------------------------

const splitStringPlus = (string) => {
    const plusArray = calculationHeading.innerHTML.split("+")
    const plusArrayNumbers = plusArray.map(string => Number(string));
    const sumOfArray = plusArrayNumbers.reduce((runningTotal, currentVal) => {
        return runningTotal + currentVal
    })
    resultHeading.innerText = sumOfArray;
    calculationHeading.innerText = "";

}

const splitStringSubtract = (string) => {
    const subtractArray = calculationHeading.innerHTML.split("-")
    const subtractArrayNumbers = subtractArray.map(string => Number(string));
    let total = subtractArrayNumbers[0] - subtractArrayNumbers[1];
    resultHeading.innerText = total;
    calculationHeading.innerText = "";
}

const splitStringMultiply = (string) => {
    const subtractArray = calculationHeading.innerHTML.split("x")
    const subtractArrayNumbers = subtractArray.map(string => Number(string));
    let total = subtractArrayNumbers[0] * subtractArrayNumbers[1];
    resultHeading.innerText = total;
    calculationHeading.innerText = "";
}

const splitStringDivide = (string) => {
    const subtractArray = calculationHeading.innerHTML.split("÷")
    const subtractArrayNumbers = subtractArray.map(string => Number(string));
    let total = subtractArrayNumbers[0] / subtractArrayNumbers[1];
    resultHeading.innerText = total;
}



