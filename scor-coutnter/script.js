let score = document.querySelector('#score')
let addButton = document.querySelector('.next')
let removeButton = document.querySelector('.back')

let value = score.innerHTML
addButton.addEventListener('click', function(){
    value++
    score.innerHTML = value
    if(value > 0){
        score.style.color = 'green'
    }else if(value === 0){
        score.style.color ='black'
    }
    
    addButton.style.boxShadow = '3px 3px 10px black'

    setTimeout(function(){
        addButton.style.boxShadow = 'none'    
    },150)
})


removeButton.addEventListener('click', function(){
    value--
    score.innerHTML = value

    if(value < 0){
        score.style.color = 'red'
    }else if(value === 0){
        score.style.color ='black'
    }

    removeButton.style.boxShadow = '3px 3px 10px black'

    setTimeout(function(){
        removeButton.style.boxShadow = 'none'    
    },150)
})