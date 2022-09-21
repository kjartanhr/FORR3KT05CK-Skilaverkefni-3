// gera date object
const date = new Date();

// nöfn daganna
const days = [
    "sunnudagur",
    "mánudagur",
    "þriðjudagur",
    "miðvikudagur",
    "fimmtudagur",
    "föstudagur",
    "laugardagur"
]

// sýna daginn
document.querySelector('#day').innerText = days[date.getDay()];

// fall til að uppfæra klukkuna
function updateTime() {
    // búa til nýtt data object alltaf þegar fallið er kallað
    const date = new Date();
    // velja klukkuna í html
    const el = document.querySelector('#time');

    // uppfæra klukkuna. við breytum tölunum í streng með String.prototype.toString()
    // við bætum '0' fyrir framan þær tölur sem eru eins stafa með String.prototype.padStart()
    el.innerText = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
}

// keyra þegar síðan er opnuð
updateTime();
// keyra á hverri sekúndu
setInterval(updateTime, 1000);
