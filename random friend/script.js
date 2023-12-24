
const resultBox = document.getElementById('autocompleteResults');
const inputBox = document.getElementById('search');
const btn = document.getElementById('btn')
const frindResult = document.querySelector('.frindResult')

function nameSugation(){
    let availableKeywords = [
        'habiba',
        'nayma',
        'khusbu',
        'khadiza',
        'sumiya',
        'mariya',
        'naznin',
        'sharmin',
        'apon',
        'rony',
        'rimon',
        'Hridoy',
        'sifat',
        'akiba',
        'Niloy',
        'Ahosan',
        'jakariya'
        // Add more names here
    ];
    
    inputBox.addEventListener('input', function () {
        let filteredResult = [];
        let input = inputBox.value.trim().toLowerCase(); // Trim whitespace from the input and convert to lowercase
    
        if (input.length) {
            filteredResult = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input);
            });
        }
    
        showAutocompleteResults(filteredResult);
    });
    
    function showAutocompleteResults(results) {
        resultBox.innerHTML = ''; // Clear previous results
    
        if (results.length > 0) {
            const ul = document.createElement('ul');
            results.forEach((result) => {
                const li = document.createElement('li');
                li.textContent = result;
                li.addEventListener('click', () => {
                    inputBox.value = result;
                    resultBox.innerHTML = ''; // Clear results on selection
                });
                ul.appendChild(li);
            });
            resultBox.appendChild(ul);
            resultBox.style.display = 'block'; // Show the result box
        } else {
            resultBox.style.display = 'none'; // Hide the result box if no matches found
        }
    }
    
    // Hide the result box when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!resultBox.contains(e.target)) {
            resultBox.style.display = 'none';
        }
    });
    
    // Prevent form submission on pressing Enter key
    inputBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
    
}

const friends = {
    "girls": [
        "habiba",
        "nayma",
        "khusbu",
        "khadiza",
        "sumiya",
        "mariya",
        "naznin",
        "sharmin"
    ],
    "boys": [
        "apon",
        "rony",
        "rimon",
        "hridoy",
        "niloy",
        "ahosan",
        "jakariya"
    ]
};

// Assuming you have 'btn' and 'inputBox' properly defined in your HTML

btn.addEventListener('click', function () {
    let value = inputBox.value.toLowerCase(); // Convert input value to lower case

    if (value === "sifat") {

        frindResult.innerHTML = `Sifat + Akiba`


    }else if (value === "akiba"){
        frindResult.innerHTML = `Akiba + Sifat`
    }else{
        if (friends.boys.includes(value)) {
        
            let random  = Math.floor(Math.random() * friends.girls.length)
            let data =  friends.girls[random]
    
            frindResult.innerHTML =   `${value} + ${data}`;
    
    
        } else if (friends.girls.includes(value)) {
            
            let random  = Math.floor(Math.random() * friends.boys.length)
            let data =  friends.boys[random]
    
            frindResult.innerHTML =   `${value} + ${data}`;
    
    
        } else {
            alert('Not found in either boys or girls');
        }
    }


    
});






nameSugation();