const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationtext
        this.currentOperationText = currentOperationText
        this.currentOperationText = "";

    }
    
    addDigit(digit) {
        console.log(digit);
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }
        
        this.currentOperationText += digit;
        this.updateScreen();
    }

    processOperation(operation) {

        if(this.currentOperationText.innerText === "" && operation !== "C" ){
            if(this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);

            }

            return;

        }
        

         let operationvalue;
         let previous = +this.previousOperationText.innerText.split("")[0];
         let current = +this.currentOperationText.innerText;


        switch (operation) {
            case "+":
                operationvalue = previous + current;
                this.updateScreen(operationvalue, operation, current, previous);
            break;
            case "-":
                operationvalue = previous - current;
                this.updateScreen(operationvalue, operation, current, previous);
            break;
            case "/":
                operationvalue = previous / current;
                this.updateScreen(operationvalue, operation, current, previous);
            break;
            case "*":
                operationvalue = previous * current;
                this.updateScreen(operationvalue, operation, current, previous);
            break;
            case "DEL":
                this.processDelOperator();
            break;
            case "CE":
                this.processClearCurretOperation();
            break;
            case "C":
                this.processClearallOperation();
            break;
            case "=":
                this.processEqualOperator();
            break;
            default:
            return;

        
        }
    }
    
    updateScreen(operationValue = null, operation = null, current = null, previous = null) {

        if(operationValue === null) {
        this.currentOperationText.innerText += this.currentOperation;
        } else {
            if(previous === 0){
                operationValue = current;
            }

            this.previousOperationstext.innerText = `${operationvalue} ${operation}`;
            this.currentOperationstext.innerText = "";

        }
    }
    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"];

        if(!mathOperation.includes(operation)){
            return;
        }

        this.previousOperationstext.innerText = this.previousOperationstext.innerText.slice (0, -1) + operation;

    }



    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    processClearCurrentOperator() {
        this.currentOperationText.innerText = "";
    }

    processClearOperator () {
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }

    processEqualOperator() {

        let operation = previousOperationText.innerText.split("")[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        const value = e.target.innerText;

        if(+value  >= 0 || value  === ".") {
            console.log(value);
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});