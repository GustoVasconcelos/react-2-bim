export default function Letreiro() {
  return (
    <>
        <h3>Atividade 2</h3>
        <p id="letreiro"></p>
    </>
  );
}

let index = 0;
let textoLetreiro = "Conheça a Fatec";

function AtualizaLetreiro() {
    index++;
    if (index > textoLetreiro.length) {
        index = 0;
    }

    const letreiroRoot = document.getElementById('letreiro');
    if (letreiroRoot) {
        letreiroRoot.innerText = textoLetreiro.slice(0,index);
    }
}

setInterval(AtualizaLetreiro, 200);