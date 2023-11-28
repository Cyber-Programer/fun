var texts = document.querySelectorAll('h1, h2');
var main = document.querySelector('.main');
var input = document.querySelector('input')

main.addEventListener('mousemove', function(event) {
    texts.forEach(function(text) {
        gsap.to(text, {
            x: 10,
            duration: 0.3,
            opacity:1
        });
        text.style.color = 'red';
    });
});

main.addEventListener('mouseleave', function(event) {
    texts.forEach(function(text) {
        gsap.to(text, {
            x: 0,
            duration: 0.3,
            opacity:0
        });
        text.style.color = 'black';
    });
    
});

input.addEventListener('mouseover', function() {
    input.style.backgroundColor = 'white'
    input.style.color = 'red'

});

input.addEventListener('mouseleave', function() {
    input.style.backgroundColor = 'black'
    input.value = ' '

});


input.addEventListener('click', function() {
        alert('This is a demo page')
        input.addEventListener('click',function(){
        window.location.href = "http://www.facebook.com/root.lovs";
    })

});

alert('This is a demo page')
alert('This is a demo page')
alert('This is a demo page')
alert('This is a demo page')
alert('This is a demo page')