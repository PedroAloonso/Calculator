var screen = document.querySelector('.screen')

var number0 = document.querySelector('#btn0')
var number1 = document.querySelector('#btn1')
var number2 = document.querySelector('#btn2')
var number3 = document.querySelector('#btn3')
var number4 = document.querySelector('#btn4')
var number5 = document.querySelector('#btn5')
var number6 = document.querySelector('#btn6')
var number7 = document.querySelector('#btn7')
var number8 = document.querySelector('#btn8')
var number9 = document.querySelector('#btn9')
var numbers = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9]

// after the calculator is funcional,create a 'limit' in screen,this 'limit' add more p tag and decreases font size in all p tang in screen,up antil 3

var additionSign = document.querySelector('#btnAdd')
var subtractionSign = document.querySelector('#btnSubtract')
var multiplicationSign = document.querySelector('#btnMultiply')
var divisionSign = document.querySelector('#btnDivide')

var clearSign = document.querySelector('#btnClear')
var equalSign = document.querySelector('#btnEqual')

var p = document.querySelector('p')

var arrayAdd = []
var arraySubtr = []
var arrayMult = []
var arrayDivi = []
var lastOperation = undefined
var haveResult = false

function clearScreen(){
    p.innerHTML = ''
}

function addOnScreen(btn) {
    btn.onclick = () => {
        if(haveResult == true){
            clearScreen()
            haveResult = false
        }
        p.innerHTML += btn.value
    }
}
numbers.map(addOnScreen)

function operation(array, type) {
    let n = Number(p.textContent)
    array.push(n)
    lastOperation = type
    clearScreen()
}

function equal() {
    let result
    let n = Number(p.textContent)
    switch (lastOperation) {
        case '+':
            arrayAdd.push(n)
            result = arrayAdd.reduce((a,b) => a+b)
            p.innerHTML = result
            arrayAdd = []
            break;
        case '-':
            arraySubtr.push(n)
            result = arraySubtr.reduce((a,b) => a-b)
            p.innerHTML = result
            arraySubtr = []
            break;
        case 'x':
            arrayMult.push(n)
            result = arrayMult.reduce((a,b) => a*b)
            p.innerHTML = result
            arrayMult = []
            break;
        case '/':
            arrayDivi.push(n)
            result = arrayDivi.reduce((a,b) => a/b)
            p.innerHTML = result
            arrayDivi = []
            break;
    
        default:
            break;
    }
    console.log(result)
    haveResult = true
    result = undefined
}


additionSign.onclick = () => operation(arrayAdd, '+')
subtractionSign.onclick = () => operation(arraySubtr, '-')
multiplicationSign.onclick = () => operation(arrayMult, 'x')
divisionSign.onclick = () => operation(arrayDivi, '/')

equalSign.addEventListener('click',equal)

clearSign.addEventListener('click',clearScreen)


