function go(){
    window.location.href = 'https://cyber-programer.github.io/first_web'
}

function main(){
    const repot = document.getElementById('comment')
    const user = document.getElementById('enter').value.toLowerCase();
    if (!user){
        alert('Enter you name')
        return;
    }else{
        if (user === 'sifat'){
            repot.innerHTML = 'Admin'
        } else{
            if(user === 'shohan'){
                repot.innerHTML = 'Pure single boy'
            } else if(user === 'apon'){
                repot.innerHTML = 'Khadur friend'
            } else if(user === 'hridoy'){
                repot.innerHTML = 'Mey potanor try kari'
            } else if(user === 'akiba'){
                repot.innerHTML = 'sifat er bestu'
            } else if(user === 'mariya'){
                repot.innerHTML  = 'Jony kakku er fan'
            } else if(user== 'sharmin'){
                repot.innerHTML = 'Half married'
            } else if(user == 'sumiya'){
                repot.innerHTML = 'Collage pass'
            }
        }
    }
}