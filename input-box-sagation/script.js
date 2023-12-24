let availableKeywords = [
    'html',
    'css',
    'js',
    'php',
    'python',
    'java',
    'c',
    'c++',
    'c#',
];

const resultBox = document.querySelector('.result');
const inputBox = document.querySelector('#search');

inputBox.onkeyup = function () {
    let filteredResult = [];
    let input = inputBox.value.trim(); // Trim whitespace from the input

    if (input.length) {
        filteredResult = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    resultBox.style.visibility = filteredResult.length ? 'visible' : 'hidden';
    displayResults(filteredResult);
};

function displayResults(results) {
    const content = results.map((list) => {
        return "<li onclick=\"selectInput('" + list + "')\">" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(value) {
    inputBox.value = value;
    resultBox.style.visibility = 'hidden'; // Hide the result box after selecting a value
}
