// http://127.0.0.1:5501/index.html

beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/index.html");
});

// test, it 

describe("Should display the calculator", () => {
    it("should show the calculator on screen", () => {
    //arrange -> get things ready
    //act -> doing it
    //pass in a selector
    // conbine act and assert
    cy.get(".container").should("exist");
    //assert -> see if its what you want it to be
});

it("should show the 19 buttons on the screen", () => {
    cy.get("button").should("have.length", 19);
})

})
// Do something -> simulate user

describe("Should perform addition", () => {
    it("should calculate single digit addition, 7 + 8 = 15", () => {
        
        //cy.get("[value='+']").click();
        cy.get("button").contains("8").click();
        cy.get("#button-plus").click();
        cy.get("button").contains("7").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "15");
    })
    it("should calculate double digit addition, 20 + 15 + 50 = 85", () => {
        cy.get("button").contains("2").click();
        cy.get("button").contains("0").click();
        cy.get("#button-plus").click();
        cy.get("button").contains("1").click();
        cy.get("button").contains("5").click();
        cy.get("#button-plus").click();
        cy.get("button").contains("5").click();
        cy.get("button").contains("0").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "85");
    })
})

describe("Should perform subtraction", () => {
    it("should calculate single digit subtraction, 5 - 2 = 3", () => {
        cy.get("button").contains("5").click();
        cy.get("#button-subtract").click();
        cy.get("button").contains("2").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "3");
    })
    it("should calculate double digit subtraction, 53 - 20 = 33", () => {
        cy.get("button").contains("5").click();
        cy.get("button").contains("3").click();
        cy.get("#button-subtract").click();
        cy.get("button").contains("2").click();
        cy.get("button").contains("0").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "33");
    })
    it("should calculate double digit subtraction with a float, 53 - 20.5 = 32.5", () => {
        cy.get("button").contains("5").click();
        cy.get("button").contains("3").click();
        cy.get("#button-subtract").click();
        cy.get("button").contains("2").click();
        cy.get("button").contains("0").click();
        cy.get("button").contains(".").click();
        cy.get("button").contains("5").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "32.5");
    })
})

describe("Should perform multiplication", () => {
    it("should calculate single digit multiplication, 5 x 2 = 10", () => {
        cy.get("button").contains("5").click();
        cy.get("#button-multiply").click();
        cy.get("button").contains("2").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "10");
    })
})

describe("Should perform division", () => {
    it("should calculate single digit divison, 9 ÷ 3 = 3", () => {
        cy.get("button").contains("9").click();
        cy.get("#button-divide").click();
        cy.get("button").contains("3").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "3");
    })
})

describe("Should become a decimal", () => {
    it("should turn a single digit into a decimal, 5 -> 0.05", () => {
        cy.get("button").contains("5").click();
        cy.get("#button-percentage").click();
        cy.get(".result__h2").should("have.text", "0.05");
    })
})

describe("Should create a minus number", () => {
    it("should turn a positive number into a negative number, 9 -> -9", () => {
        cy.get("button").contains("9").click();
        cy.get("#button-negative").click();
        cy.get(".result__h2").should("have.text", "-9");
    })
    it("should turn a number negative, then back to positive, 9 -> -9 -> 9", () => {
        cy.get("button").contains("9").click();
        cy.get("#button-negative").click();
        cy.get("#button-negative").click();
        cy.get(".result__h2").should("have.text", "9");
    })
})

describe("Should clear the result heading", () => {
    it("should clear the previous number, 960 -> blank string", () => {
        cy.get("button").contains("9").click();
        cy.get("button").contains("6").click();
        cy.get("button").contains("0").click();
        cy.get("#button-clear").click();
        cy.get(".result__h2").should("have.text", "");
    })
})

describe("Should have class of button-number", () => {
    it("should have a class of button-number, .button-number", () => {
        cy.get("button").contains("9").should("have.class", "button-number");
    })
})

describe("Should only show decimal in the right place", () => {
    it("should add a zero in front of decimal point when it is clicked first, .9 -> 0.9 ", () => {
        cy.get("button").contains(".").click();
        cy.get("button").contains("9").click();
        cy.get(".result__h2").should("have.text", "0.9");
    })
    it("should add only one decimal to a number, 7...9 -> 7.9 ", () => {
        cy.get("button").contains("7").click();
        cy.get("button").contains(".").click();
        cy.get("button").contains(".").click();
        cy.get("button").contains(".").click();
        cy.get("button").contains("9").click();
        cy.get(".result__h2").should("have.text", "7.9");
    })
})

// Negative test cases -> Not going to plan
describe("Should divide 0", () => {
    it("should divide 0, 0 /0 = 0", () => {
        cy.get("button").contains("0").click();
        cy.get("#button-divide").click();
        cy.get("button").contains("0").click();
        cy.get(".button-equal").click();
        cy.get(".result__h2").should("have.text", "0");
    })
})

describe("Should only display operators in the right place", () => {
    it("should not show two opertors in the calculation heading, 9÷3", () => {
        cy.get("button").contains("9").click();
        cy.get("#button-divide").click();
        cy.get("#button-divide").click();
        cy.get("button").contains("3").click();
        cy.get(".calculation__h2").should("have.text", "9÷3");
    })
    it("should not show an operator first, 6÷2", () => {
        cy.get("#button-divide").click();
        cy.get("button").contains("6").click();
        cy.get("#button-divide").click();
        cy.get("button").contains("2").click();
        cy.get(".calculation__h2").should("have.text", "6÷2");
    })
})

describe("Should make a decimal negative", () => {
    it("should turn a decimal number negative, 5 -> 0.05 -> -0.05", () => {
        cy.get("button").contains("5").click();
        cy.get("#button-percentage").click();
        cy.get("#button-negative").click();
        cy.get(".result__h2").should("have.text", "-0.05");
    })
})