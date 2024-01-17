function typing(){
    const text = document.querySelector('#text');
    const data = ['Md Sifat Islam', 'Ethical Hacker', 'Programmer', 'Developer' ,'Student'];
    let x = 0;
    let count = 0;
    let type = true;
    let datainx = 0;

    const intervalId = setInterval(() => {
        text.textContent = data[datainx].substring(0, x);

        if (type) {
            x++;
        } else {
            x--;
        }

        if (x < 0) {
            type = true;
            x = 0;
        }

        if (x > data[datainx].length) {
            type = false;
        }

        if (x === 0 && !type) {
            type = true;
            datainx++;
            
            // Reset datainx if it exceeds the array length
            if (datainx === data.length) {
                datainx = 0;
            }
            
            // Clear the interval if all strings are displayed
            if (datainx === 0 && !type) {
                clearInterval(intervalId);
            }
        }
    }, 100);
}

typing()
// alert()