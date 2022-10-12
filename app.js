class Calculator{
    constructor(latterOperandText, formerOperandText) {
        this.latterOperandText = latterOperandText;
        this.formerOperandText = formerOperandText;
        this.clearDisplay();   
    }

    clearDisplay(){
        this.formerOperand = '';
        this.latterOperand = '';
        this.operation = undefined;
    }

    appendNumber(number){
        if(number==="." && this.formerOperand.includes('.')) return
         this.latterOperand = this.latterOperand.toString() + number.toString()
        //  this.formerOperand = this.formerOperand.toString() + number.toString()

        

    }

    chooseArithmeticOperand(operation){
        if (this.formerOperand==="") return
        if (this.latterOperand!==""){
            this.computeArithmeticOperation()
        }
        this.operation = operation;
        this.formerOperand = this.latterOperand;
        this.latterOperand="";

    }

    computeArithmeticOperation(){
        let compute;
        const former = parseFloat(this.formerOperand)
        const latter = parseFloat(this.formerOperand)
        console.log(former,latter)
        if (isNaN(former) || isNaN(latter))  return 
       arithmeticOperand.forEach(btn=>{
        btn.addEventListener("click",e=>{
            const value = e.target.closest("[data-arithmetic-operator]")
            let check_value = value.dataset.arithmeticOperator
            this.operation=check_value
            switch (this.operation) {
                case '+':
                    compute = former + latter
                    break;
                case '-':
                    compute = former - latter
                    break;
                case '÷':
                    compute = former / latter
                    break;
                case '×':
                    compute = former * latter
                    break;
                // case '':
                //     compute = Math.pow(former,2);
                //     break;
                case '√':
                    compute = Math.sqrt(former)
                    break;
                default:
                    return
        
            }
        })
       })

        this.formerOperand=compute;
       this.operation=undefined;
     

    }

    deleteArithmetic(){
        // this.latterOperand = this.latterOperand.toString().slice(0, - 1)
        this.latterOperand = this.latterOperand.toString().substring(0,this.latterOperand.length -1)
    }

    squareOperation(){

    }

    squareRootOperation(){

    }

    
    
    showTextDisplay(){
        this.formerOperandText.innerText = this.formerOperand;
        this.latterOperandText.innerText = this.latterOperand;
        
    }

}



const latterOperandText = document.querySelector('.latter-operand');
const formerOperandText = document.querySelector('.former-operand');
const numberBtn = document.querySelectorAll('[data-number]');
const arithmeticOperand = document.querySelectorAll('[data-arithmetic-operator]')
const deleteBtn = document.querySelector('[data-delete-button]');
const closeArithmeticBtn = document.querySelector('[data-close-arithmetic]');
const squareRootBtn = document.querySelector('[data-square-root]');
const squareBtn = document.querySelector('[data-square-button]');
const equalsBtn = document.querySelector('[data-equals-button]');
const decimalBtn = document.querySelector('[data-decimal-point')


const calculator = new Calculator(latterOperandText, formerOperandText)

numberBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        calculator.appendNumber(btn.innerText);
        calculator.showTextDisplay()
    })
})

arithmeticOperand.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        calculator.appendNumber(btn.innerText);
        calculator.showTextDisplay();
    })
})

closeArithmeticBtn.addEventListener("click",()=>{
    calculator.clearDisplay();
    calculator.showTextDisplay();
    
})

deleteBtn.addEventListener("click", ()=>{
    calculator.deleteArithmetic();
    calculator.showTextDisplay()

})
    
equalsBtn.addEventListener("click", ()=>{
    calculator.computeArithmeticOperation()
    calculator.showTextDisplay()
})

decimalBtn.addEventListener('click', btn=>{
    calculator.appendNumber(btn.innerText);
    calculator.showTextDisplay()
    
})

const get_by_class = document.querySelectorAll('.arithmetic-operator');
get_by_class.forEach(btn=>{
    btn.addEventListener("click",e=>{
        const data_class = e.target.closest("[data-arithmetic-operator]")
        console.log(data_class.dataset.arithmeticOperator)
    })
})
console.log(get_by_class)

numberBtn.forEach(btn=>{
    btn.addEventListener("click", e=>{
        // e.preventDefault();
        const data_number = e.currentTarget.closest("[data-number]")
        console.log(data_number.dataset.number)
    })
})

const operate = document.querySelectorAll('.arithmetic-operator');
console.log(operate) 

