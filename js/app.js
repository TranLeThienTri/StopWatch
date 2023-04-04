let gio = 00;
let phut = 00;
let giay = 00;

let outPutGio = document.querySelector('.gio');
let outPutPhut = document.querySelector('.phut');
let outPutGiay = document.querySelector('.giay');

let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let Interval;
btnStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 100);
});

btnStop.addEventListener('click', () => {
    clearInterval(Interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(Interval);
    gio = "00";
    phut = "00";
    giay = "00";
    outPutGio.innerHTML = gio;
    outPutPhut.innerHTML = phut;
    outPutGiay.innerHTML = giay;
})


function startTime() {
    giay++;
    if (giay <= 9) {
        outPutGiay.innerHTML = "0" + giay;
    } else if (giay > 9) {
        outPutGiay.innerHTML = giay;
    }
    if (giay > 60) {
        phut++;
        outPutPhut.innerHTML = "0" + phut;
        giay = 0;
        outPutGiay.innerHTML = giay;
    }
    if (phut > 9) {
        outPutPhut.innerHTML = phut;
    }
    if (phut > 60) {
        gio++;
        outPutGio.innerHTML = "0" + gio;
        phut = 0;
        giay = 0;
        outPutPhut.innerHTML = phut;
        outPutGiay.innerHTML = giay;
    }
}