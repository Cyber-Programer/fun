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
                repot.innerHTML = 'Khadur jamai 🤭'
            } else if(user === 'hridoy'){
                repot.innerHTML = 'Mey potanor try kari 🤐'
            } else if(user === 'akiba'){
                repot.innerHTML = 'sifat er bestu 😍'
            } else if(user === 'mariya'){
                repot.innerHTML  = 'Jony kakku er fan 🤐'
            } else if(user== 'sharmin'){
                repot.innerHTML = 'Half married 😐'
            } else if(user == 'sumiya'){
                repot.innerHTML = 'Collage pass 🤨'
            } else if(user == 'naima' || user ==  'nayma'){
                repot.innerHTML = 'Cheka khor 😶'
            } else if(user == 'rony'|| user == 'roni'){
                repot.innerHTML = 'Biri khor 😏'
            }else if(user == 'habiba'){
                repot.innerHTML = 'Choto morich e jhal besi 😌'
            }else if(user =='khusbu'){
                repot.innerHTML ='sir re bichar dimu 😎'
            }else if(user == 'khadiza'|| user == 'khadija'){
                repot.innerHTML = 'Apon er bou 🤭'
            }else if(user == 'rimon'){
                repot.innerHTML = 'Ekta na hoile arekta 🤓'
            }else if(user == 'ahosan'){
                repot.innerHTML = 'Sobar pola 😟'
            }else if(user =='niloy'){
                repot.innerHTML = 'Gorila 🤭'
            }
        }
    }
}
