function go(){
    window.location.href = 'https://cyber-programer.github.io/first_web';
}

function main(){
    const repot = document.getElementById('comment');
    const user = document.getElementById('enter').value.toLowerCase();
    if (!user){
        alert('Enter your name');
        return;
    } else {
        if (user === 'sifat'){
            repot.innerHTML = 'Admin';
        } else {
            if(user === 'shohan'){
                repot.innerHTML = 'Pure single boy';
            } else if(user === 'apon'){
                repot.innerHTML = 'All unmarried girls of crush 🤭';
            } else if(user === 'hridoy'){
                repot.innerHTML = 'Mey potanor try kari 🤐';
            } else if(user === 'akiba'){
                repot.innerHTML = 'sifat er bestu 😍';
            } else if(user === 'mariya'){
                repot.innerHTML  = 'Jony kakku er fan 🤐';
            } else if(user === 'sharmin'){
                repot.innerHTML = 'Half married 😐';
            } else if(user == 'sumiya'|| user =='sumiya'){
                repot.innerHTML = 'Collage pass 🤨';
            } else if(user == 'naima' || user ==  'nayma'){
                repot.innerHTML = 'Cheka khor 😶';
            } else if(user == 'rony'|| user == 'roni'){
                repot.innerHTML = 'Kuttar haddi 😏 sorry faziler*';
            } else if(user == 'habiba'){
                repot.innerHTML = 'Choto morich e jhal besi 😌';
            } else if(user =='khusbu'){
                repot.innerHTML ='sir re bichar dimu 😎';
            } else if(user == 'khadiza'|| user == 'khadija'){
                repot.innerHTML = 'Apon er bestie 🤭';
            } else if(user == 'rimon'){
                repot.innerHTML = 'Ekta na hoile arekta 🤓';
            } else if(user == 'ahosan'){
                repot.innerHTML = 'Sobar pola 😟';
            } else if(user =='niloy'){
                repot.innerHTML = 'Gorila 🤭';
            } else if(user == 'shorna'){
                repot.innerHTML = 'Lolita 😌';
            } else if(user == 'rafa'){
                repot.innerHTML = 'Unknown person 😏';
            } else if(user == 'tasrun'){
                repot.innerHTML = 'Choto vai amr';
            } else if(user == 'hasan'||user == 'hasan sir'){
                repot.innerHTML = 'Favorite sir 😍';
            }else if(user == 'ruhulamin'||user == 'ruhul amin'){
                repot.innerHTML = 'Big boss';
            }else if(user == 'arifa'||user == 'adiba'){
                repot.innerHTML ='gf';
            }else if(user == 'israfil'||user=='israfil sir'){
                repot.innerHTML = 'Unar kotha bad....';
            }else if(user == 'sham'||user == 'shams'){
                repot.innerHTML ='Good teacher';
            }else if(user == 'meraj'||user =='miraj'){
                repot.innerHTML = 'Taklare ar ki bolbo';
            }else if(user == 'forhad'||user == 'forhad sir'){
                repot.innerHTML = 'Phone thakle aj amio teacher hoitam'
            }
        }
    }
}
