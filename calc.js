document.addEventListener('DOMContentLoaded', function() {
    let btns = document.querySelectorAll('.num-button');
    let resultBox = document.getElementById('resultBox');
    let clearBtn = document.getElementById('clear');
    let total = document.getElementById('total');

    let btnSpread = [...btns];

    // for number inputs
    btnSpread.forEach((button, i) => {
        button.addEventListener('click', () => {
            // inner values for calculator
            if (resultBox.innerHTML == '0') {
                resultBox.innerHTML = '';
            }
            let value = btns[i].innerHTML;

            // making sure not to add more than one decimal point in a number
            if (value === '.' && resultBox.innerHTML.includes('.')) {
                return;
            }

            resultBox.innerHTML += value;
        });
    });

    // functions to evaluate the strings
    function evaluate(fn) {
        try {
            return eval(fn);
        } catch (error) {
            return 'Error';
        }
    }

    // To calculate all functions
    total.addEventListener('click', () => {
        let allInputs = resultBox.innerHTML;

        // Handling division by zero
        if (allInputs.includes('/0')) {
            resultBox.innerHTML = 'Error';
        } else {
            resultBox.innerHTML = evaluate(allInputs);
        }
    });

    // functions to clear all inputs
    clearBtn.addEventListener('click', () => {
        resultBox.innerHTML = '0';
    });
});
