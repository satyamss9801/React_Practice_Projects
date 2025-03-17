let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value[display.value.length - 1];
    if (display.value !== "" && !"+-*/%".includes(lastChar)) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value); // Using eval for simplicity
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
