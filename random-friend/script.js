
const resultBox = document.getElementById('autocompleteResults');
const inputBox = document.getElementById('search');
const btn = document.getElementById('btn')
const frindResult = document.querySelector('.frindResult')
const submitBtn = document.getElementById('btn2')
const main  = document.querySelector('.main')
const loginForm = document.querySelector('.login')
const nameInput = document.querySelector('#name');
const dataShow = document.querySelector('#data');
const iButton = document.querySelector('.fa-circle-info')
const cradit = document.querySelector('.cradit')
const backButton = document.querySelector('#back')
let submit = false;


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
        // 'shams sir',
        // 'hasan sir',
        // 'israfil sir',
        // 'ruhul amin sir',
        // 'miraj sir',
        // 'khalid sir',
        'rimon',
        'Hridoy',
        'shohan',
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
function randomNameShow(){
    const friends = {
        "girls": [
            "habiba",
            "nayma",
            "khusbu",
            "khadiza",
            "sumiya",
            "mariya",
            "naznin",
            "sharmin",

            'srithi',
            'sadiya',
            'anuska',
            'anika',
            'niha',
            'nusayba',
            'afrin',
            'tohan',
            'jonaki',
        ],
        "boys": [
            "apon",
            "rony",
            "rimon",
            "hridoy",
            "niloy",
            "ahosan",
            "jakariya",
            'shohan',
            'ibrahim',
            'bilal',
            'umar',
            'yousuf',
            'faisal',
        ]
    };
    
    inputBox.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
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
        }
    })
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
}
function checkNameSumitation(){
    if(submit === false) {
        loginForm.style.visibility = 'visible';
        main.style.visibility = 'hidden';
        cradit.style.visibility = 'hidden';

    }else{
        loginForm.style.visibility = 'hidden';
        main.style.visibility = 'visible';
        cradit.style.visibility = 'hidden';
    }
}




function checkInput() {
    const name = nameInput.value.trim();
    let hasNumber = /\d/.test(nameInput.value);

    if(name === ''){
        dataShow.innerHTML = 'Enter you name'
        dataShow.style.color = 'red'
    }else{
        if (hasNumber) {
            dataShow.innerHTML = 'Only text allowed';
            dataShow.style.color = 'red';
        } else {
            dataShow.innerHTML = 'You can use this';
            dataShow.style.color = 'green';
    
            setTimeout(function() {
                dataShow.innerHTML = '';
            }, 2000);
    
            setTimeout(function() {
                // loginForm.style.visibility = 'hidden';
                submit = true;
                checkNameSumitation(); // Assuming checkNameSumitation is defined elsewhere
                sendDataToBot(name);
            }, 2000);
        }
    }
}



// Function to send data to the Telegram bot
async function sendDataToBot(name) {
    const botToken = '6818341288:AAEkuYnzPL5kHWS5PZ0iTCyQdh9gEz6JnME'; // Replace with your Telegram bot token
    const chatId = '5356385703'; // Replace with your Telegram chat ID
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const data = {
      chat_id: chatId,
      text: `New submission: ${name}`
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log('Message sent!');
        // You can add further handling here if needed
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
        console.error('Error sending message:', error);
      // Handle errors here
    }
}
  
//   document.addEventListener('DOMContentLoaded', function() {
    
//     submitBtn.addEventListener('click', function() {
//        // Get the entered name and remove leading/trailing spaces
      
//       if (name !== '') {
//         sendDataToBot(name); // Send the name to the Telegram bot
//         // dataShow = `Name sent: ${name}`;
//       } else {
//         alert('Please enter a valid name.');
//       }
//     });
//   });
  



submitBtn.addEventListener('click', checkInput);
nameInput.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'enter') {
        checkInput();
    }
});


iButton.addEventListener('click',function(){
    loginForm.style.visibility = 'hidden';
    main.style.visibility = 'hidden';
    cradit.style.visibility = 'visible';
})

backButton.addEventListener('click',function(){
    loginForm.style.visibility = 'hidden';
    main.style.visibility = 'visible';
    cradit.style.visibility = 'hidden';
})







  

nameSugation();
randomNameShow();
checkNameSumitation()
