const hourBlock = document.querySelector('.hours');
const minuteBlock = document.querySelector('.minutes');
const secondBlock = document.querySelector('.seconds');

const deg = 6;

function clock() {
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours() * 30;
        let minutes = date.getMinutes() * deg;
        let seconds = date.getSeconds() * deg;
    
        hourBlock.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minuteBlock.style.transform = `rotateZ(${minutes}deg)`
        secondBlock.style.transform = `rotateZ(${seconds}deg)`
    }, 0)
}

clock()