let buttonTheme = document.querySelector(".switch-btn");
let inputValue = document.querySelector(".result-input");

buttonTheme.addEventListener('click', function () {
    let buttonThemeOn = buttonTheme.classList.contains("switch-on");
    let history = document.querySelector(".history");
    let background = document.querySelector(".wrapper-black");
    let calculateBackground = document.querySelector(".calculator");
    let iconLight = document.querySelector(".theme-img-light");
    let iconDark = document.querySelector(".theme-img-dark");
    let inputExpression = document.querySelector(".result-expression");
    let keyboardBackground = document.querySelector(".keyboard");
    let keyboardTop = document.querySelector(".keyboard-keys-top");
    let keyboardRight = document.querySelector(".keyboard-right");
    let keyboardEquals = document.querySelector(".keyboard-equals");

    let keysNumber = document.querySelectorAll(".keyboard-button-number");
    let buttonAll = document.querySelectorAll(".keyboard-button");

    if (!buttonThemeOn) {
        buttonTheme.classList.add("switch-on");
        history.classList.add("history-dark");
        background.classList.add("wrapper-white");
        calculateBackground.classList.add("calculator-dark");
        iconLight.classList.add("theme-img-light-on");
        iconDark.classList.add("theme-img-dark-on");
        inputValue.classList.add("result-input-dark");
        inputExpression.classList.add("result-expression-dark");
        keyboardBackground.classList.add("keyboard-dark");
        keyboardTop.classList.add("keyboard-keys-top-dark");
        keyboardRight.classList.add("keyboard-right-dark");
        keyboardEquals.classList.add("keyboard-equals-dark");

        for (let item of keysNumber) {
            item.classList.add("keyboard-button-number-dark");
        }

        for (let item of buttonAll) {
            item.classList.add("keyboard-button-dark");
        }

    } else {
        buttonTheme.classList.remove("switch-on");
        history.classList.remove("history-dark");
        background.classList.remove("wrapper-white");
        calculateBackground.classList.remove("calculator-dark");
        iconLight.classList.remove("theme-img-light-on");
        iconDark.classList.remove("theme-img-dark-on");
        inputValue.classList.remove("result-input-dark");
        inputExpression.classList.remove("result-expression-dark");
        keyboardBackground.classList.remove("keyboard-dark");
        keyboardTop.classList.remove("keyboard-keys-top-dark");
        keyboardRight.classList.remove("keyboard-right-dark");
        keyboardEquals.classList.remove("keyboard-equals-dark");

        for (let item of keysNumber) {
            item.classList.remove("keyboard-button-number-dark");
        }

        for (let item of buttonAll) {
            item.classList.remove("keyboard-button-dark");
        }
    }
})











// let buttonsPad = document.querySelector(".keyboard-keys");
// let outpud = document.querySelector(".result-input");

// document.body.addEventListener("click", function(e) {
//     let button = e.target;
//     if (button.classList.contains("keyboard-button")) {
//         console.log(e);
        
//     }
// })

let calculatorButton = document.querySelectorAll(".keyboard-button");

let a = '';
let b = '';
let oper = '';
let turnOnOff = false;

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00", "."];
let opperator = ["+", "-", "*", "/"];

function clearAll () {
    a = '';
    b = '';
    oper = '';
    turnOnOff = false;
    inputValue.value = 0;
}

document.querySelector("body").addEventListener("keyup", (event) => {
    let keys = event.key;

        if (keys == "Backspace") {
            backspaced();
            clearAll();
            return;
        }

        if (number.includes(keys)) {
            if (b === '' && oper === '') {
                a += keys;
                inputValue.value = a;
            } else if (a !== "" && b !== '' && turnOnOff) {
                b = keys;
                turnOnOff = false;
                inputValue.value = a;

            } else {
                b += keys;
                inputValue.value = b;
            }
            console.log(a, b, oper);
            return;
        }

        if (opperator.includes(keys)) {
            oper = keys;
            inputValue.value = oper;
            return;
        }

        if (keys === 'Enter' || keys === '=') {
            if (b === "") b = a;
            switch (oper) {
                case '+':
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "*":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        inputValue.value = "Error";
                        a = '';
                        b = '';
                        oper = '';
                        return
                    }
                    a = a / b;
                    break;
            }
            turnOnOff = true;
            inputValue.value = a;
            console.log(a, b, oper);
        }

    cOrAc();
});

document.querySelector(".keyboard-keys").addEventListener("click", (event) => {
    let button = event.target;

    if (button.classList.contains("keyboard-button")) {
        if (button.innerHTML == 'C' || button.innerHTML == 'AC') {
            backspaced();
            clearAll();
            return;
        }


        if (number.includes(button.innerHTML)) {
            if (b === '' && oper === '') {
                a += button.innerHTML;
                inputValue.value = a;
            } else if (a !== "" && b !== '' && turnOnOff) {
                b = button.innerHTML;
                turnOnOff = false;
                inputValue.value = a;

            } else {
                b += button.innerHTML;
                inputValue.value = b;
            }
            console.log(a, b, oper);
            return;
        }

        if (opperator.includes(button.innerHTML)) {
            oper = button.innerHTML;
            inputValue.value = oper;
            return;
        }

        if (button.innerHTML === '=') {
            if (b === "") b = a;
            switch (oper) {
                case '+':
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "*":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        inputValue.value = "Error";
                        a = '';
                        b = '';
                        oper = '';
                        return
                    }
                    a = a / b;
                    break;
            }
            turnOnOff = true;
            inputValue.value = a;
            console.log(a, b, oper);
        }


    }
    cOrAc();
})

function backspaced() {
    let backspaceing = inputValue.value.slice(0, -1);
    inputValue.value = backspaceing;
}

function cOrAc() {
    inputValue.value == '' ? document.querySelector(".ac").innerHTML = 'AC' : document.querySelector(".ac").innerHTML = 'C';
}