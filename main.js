const stage = document.createElement('stage');
document.body.appendChild(stage);
const hajibutton = document.getElementById('haji');
const title = document.getElementById('text');
const sabu = document.getElementById('text1');

function start () {
    hajibutton.style.display = "none";
    title.style.display = "none";
    sabu.style.display = "none";
    kaisi()
}
