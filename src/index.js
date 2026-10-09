//1
const timer1 = document.querySelector('.timer1')
const btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', () => {
    let minutes = 60;
    btn1.disabled = true;
    const timerId = setInterval(() => {
        minutes--;
        console.log(minutes)
        timer1.textContent = minutes;
        if(minutes === 30){
            alert("Залишилось 30 хвилин!")
        } else if(minutes === 0){
            alert("час вийшов!")
            btn1.disabled = false;
            clearInterval(timerId)
        }
    }, 1000) //60 * 1000 в хвилинах
})

//2
const timer2 = document.querySelector('.timer2')
const btn2 = document.querySelector('.btn2')
const bomb = document.querySelector('.bomb')

btn2.addEventListener("click", () => {
    let seconds = 30;
    bomb.textContent = "💣"
    btn2.disabled = true;
    btn2.classList.remove('ready');
    const timerIdd = setInterval(() => {
        seconds--;
        console.log(seconds)
        timer2.textContent = seconds;
        if(seconds === 10){
            bomb.classList.add('blink')
        } else if (seconds === 0){
            bomb.textContent = "💥"
            bomb.classList.remove('blink');
            btn2.disabled = false;
            btn2.classList.add('ready');
            clearInterval(timerIdd)
        }
    }, 1000)
})