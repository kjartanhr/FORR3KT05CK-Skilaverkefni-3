const date = new Date();

const days = [
    "sunnudagur",
    "mánudagur",
    "þriðjudagur",
    "miðvikudagur",
    "fimmtudagur",
    "föstudagur",
    "laugardagur"
]

document.querySelector('#day').innerText = days[date.getDay()];

function updateTime() {
    const date = new Date();
    const el = document.querySelector('#time');

    el.innerText = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
}

updateTime();
setInterval(updateTime, 1000);