const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

let inputValue = "";

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value) {
            inputValue += value;
            display.value = inputValue;
        }
    });
});

// Handle clear button
clear.addEventListener('click', () => {
    inputValue = "";
    display.value = "";
});

// Handle equal button
equal.addEventListener('click', () => {
    if (inputValue) {
        try {
            display.value = eval(inputValue);
            inputValue = display.value;
        } catch {
            display.value = "Error";
        }
    }
});
