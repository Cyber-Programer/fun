// document.addEventListener('DOMContentLoaded', function () {
//     const userInput = document.getElementById('text');
//     const calculateButton = document.getElementById('btn-green');

//     calculateButton.addEventListener('click', function () {
//         calculate();
//     });

//     function calculate() {
//         const userInputValue = userInput.value;
//         const result = eval(userInputValue);

//         // Display the result within the textarea
//         userInput.value = result;
//     }
// });

(function() {
    const display = document.querySelector('#text');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.querySelector('.btn-red');
    const ansButton = document.querySelector('.btn-green');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            display.value += value;
        });
    });

    ansButton.addEventListener('click', function() {
        if(display.value === 'undefined') {
            display.value = '0';
            // alert(display.value)
        }else {
            let expression = display.value;
    
            // Remove any trailing operators or unnecessary characters
            while (isNaN(expression[expression.length - 1]) && expression.length > 0) {
                expression = expression.slice(0, -1);
            }
    
            let answer = eval(expression);
            display.value = answer;
        }
    });

    clearButton.addEventListener('click', function() {
        display.value = '';
    });
})();


