var eay = document.querySelector('#ok')
var pass = document.querySelector('#pass')


eay.addEventListener('click',function(){
    if(pass.type == 'password'){
        pass.type = 'text'
        eay.src = '/img/eye-open.png'
    }else{
        pass.type = 'password'
        eay.src = '/img/eye-close.png'
    }
})
