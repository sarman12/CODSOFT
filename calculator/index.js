const display = document.querySelector('.form-control');
                    let factMode = false;

function append(value) {
    display.value += value;
}

function calculate() {
     if (factMode) {
        calculateFactorial();
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    display.value = '';
}

function setFactMode() {
     display.value += '!';
    factMode = true;
}

                    function factorial(num) {
                        if (num === 0 || num === 1) {
                            return 1;
                        } else {
                            return num * factorial(num - 1);
                        }
                    }

                    function calculateFactorial() {
                        const inputValue = parseFloat(display.value);
                        if (!isNaN(inputValue) && inputValue >= 0 && Number.isInteger(inputValue)) {
                            display.value = factorial(inputValue);
                        } else {
                            display.value = 'Invalid Input';
                        }
                        factMode = false;
                    }