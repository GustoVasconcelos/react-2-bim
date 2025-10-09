export default function Relogio() {
  return (
    <>
        <h3>Atividade 1</h3>
        <p id="relogio"></p>
    </>
  );
}

function AtualizaRelogio() {
    let dataAtual = new Date();
    let hora = dataAtual.toLocaleTimeString();
    
    const relogioRoot = document.getElementById('relogio');
    if(relogioRoot) {
        relogioRoot.innerHTML = "Agora são: " + hora + "<br/>";
    }
}

setInterval(AtualizaRelogio, 1000);