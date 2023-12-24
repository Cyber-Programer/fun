const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const bg = document.querySelector('.main')


function changeColor(){
    const value = '123456789ABCDEF';
    let hexValue = '#';
    
    for(let i =0;i<6;i++){
        const randomIndex = Math.floor(Math.random() * value.length);
        hexValue += value[randomIndex]
    }

    // change bg color 
    bg.style.backgroundColor = hexValue
}

let callInterval;

function btnEffect(){
    function buttonEffect(x) {
        x.style.opacity = 0.6;
    }
    
    function buttonEffectClear(x) {
        x.style.opacity = 1;
    }
    
    stopBtn.addEventListener('click', function () {
        buttonEffect(stopBtn);
    
        setTimeout(function () {
            buttonEffectClear(stopBtn);
        }, 150);

        clearInterval(callInterval)

        document.querySelector('#btnName').innerHTML = 'start';
        document.querySelector('#df').innerHTML = 'automaticly change bg color.'
        startBtn.disabled = false;
    });
    
    
    startBtn.addEventListener('click', function () {
        document.querySelector('#btnName').innerHTML = 'stope'
        document.querySelector('#df').innerHTML = 'stope change bg color'
        startBtn.disabled = true;

        buttonEffect(startBtn);
        changeColor()
        callInterval = setInterval(changeColor,1500)
    
        setTimeout(function () {
            buttonEffectClear(startBtn);
        }, 150);
    });
    
}

// Function calling part.....
btnEffect()
