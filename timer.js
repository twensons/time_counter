const timer = document.querySelector("#timer");
let milliseconds = 0;
let timerNow;

const startTimer = () => {
    timer.classList.remove('paused');
    clearInterval(timerNow);
    timerNow = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        timer.innerHTML = 
        ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + '.' +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
};

const pauseTimer = () => {
    timer.classList.add('paused');
    clearInterval(timerNow);
};

const resetTimer = () => {
    timer.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
    timer.innerHTML = '00:00:00.00';
};

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.id === 'start') startTimer();
    if (element.id === 'pause') pauseTimer();
    if (element.id === 'reset') resetTimer();
});