//1
const timer1 = document.querySelector('.timer1');
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', ()=>{
    let minutes = 60;
    btn1.disabled = true;
    const timerId = setInterval(()=>{
        minutes--;
        console.log(minutes);
        timer1.textContent = minutes;
        if (minutes === 30) alert("\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C 30 \u0445\u0432\u0438\u043B\u0438\u043D!");
        else if (minutes === 0) {
            alert("\u0447\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432!");
            btn1.disabled = false;
            clearInterval(timerId);
        }
    }, 1000) //60 * 1000 в хвилинах
    ;
});
//2
const timer2 = document.querySelector('.timer2');
const btn2 = document.querySelector('.btn2');
const bomb = document.querySelector('.bomb');
btn2.addEventListener("click", ()=>{
    let seconds = 30;
    bomb.textContent = "\uD83D\uDCA3";
    btn2.disabled = true;
    btn2.classList.remove('ready');
    const timerIdd = setInterval(()=>{
        seconds--;
        console.log(seconds);
        timer2.textContent = seconds;
        if (seconds === 10) bomb.classList.add('blink');
        else if (seconds === 0) {
            bomb.textContent = "\uD83D\uDCA5";
            bomb.classList.remove('blink');
            btn2.disabled = false;
            btn2.classList.add('ready');
            clearInterval(timerIdd);
        }
    }, 1000);
});

//# sourceMappingURL=ft4-hw11.579125c3.js.map
