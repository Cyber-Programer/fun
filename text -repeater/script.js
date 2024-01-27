const textBox = document.querySelector('#text');
const textDiv = document.querySelector('.text')
const number = document.querySelector('#num');
const shows = document.querySelector('#shows');
const show = document.querySelector('.show');
const mainDiv = document.querySelector('.main');
const cptext = document.querySelector('#cpy');
const button = document.querySelector('#btn')
let textShow = '';

function repeat() {
    let text = textBox.value
    for (let i = 0; i < number.value; i++) {
        textShow += text + '\n';
        // console.log(text);
    }

    show.style.display = 'flex';
    mainDiv.style.filter = 'blur(5px)';
    shows.value = textShow;
}

document.addEventListener('click',function(event){
    if( event.target === shows){
        // console.log('coppy');
        shows.select();
        cptext.style.display = 'block';
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

    }else if(event.target === button){
        // console.log('button click');
        show.style.display = 'flex';
        mainDiv.style.filter = 'blur(5px)';
    }else{
        show.style.display = 'none';
        mainDiv.style.filter = 'blur(0px)';
    }
})