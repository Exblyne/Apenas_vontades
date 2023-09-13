var b = document.getElementById('movingbutton');
b.addEventListener("click", change);
var inn = document.getElementById('s');
var yes = document.getElementById('simm');
yes.addEventListener("click", sim);

function sim() {
    var mensagem = document.createElement("div");
    mensagem.textContent = "Eu também quero";
    mensagem.classList.add("mensagem");
    document.body.appendChild(mensagem);

    setTimeout(function () {
        mensagem.remove();
    }, 2000); // A mensagem desaparecerá após 2 segundos
}

var i = Math.floor(Math.random() * 500) + 1;
var j = Math.floor(Math.random() * 500) + 1;

function Clique() {
    let i = Math.abs(Math.floor(Math.random() * window.innerWidth - 55));
    let j = Math.abs(Math.floor(Math.random() * window.innerHeight - 21));
    console.log('here', i, j, b.style.left, b.style.top);
    b.style.left = i + 'px';
    b.style.top = j + "px";
}

