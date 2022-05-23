/// Variables

const resultHeading = document.getElementById("result");
const calculationHeading = document.getElementById("calculation");
const numberButtons = document.querySelectorAll(".button-number")
const buttonClear = document.getElementById("button-clear");
const buttonEqual = document.getElementById("button-equal");
const operators = document.querySelectorAll(".button-operation");
const buttonDecimal = document.getElementById("button-decimal");
const buttonPercentage = document.getElementById("button-percentage");
const buttonNegative = document.getElementById("button-negative");


/// Onclick functions

const onClicknumber = (event) => {
    calculationHeading.innerText += event.target.innerText;
};

const onClickoperators = (event) => {
    calculationHeading.innerText += event.target.innerHTML;
    //console.log(9);
};

const onClickClear = (event) => {
    resultHeading.innerText = "0";
    calculationHeading.innerText = "";
    //console.log(0);
};

const onClickDecimal = (event) => {
    const lastChar = calculationHeading.innerText.slice(-1);
    //let number = parseInt(calculationHeading.innerText);
    if(lastChar != "." ){
        calculationHeading.innerText += event.target.innerText;
    }
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
    
};
const onClickPercentage = (event) => {
    let number = parseInt(calculationHeading.innerText);
    calculationHeading.innerText = number /100;
};

// 
const onClickNegative = (event) => {
    let number = parseInt(calculationHeading.innerText);
    calculationHeading.innerText = number - (number * 2);
    
};
// 

/// Event listeners 
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


