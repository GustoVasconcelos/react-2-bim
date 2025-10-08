export default function Relogio() {
  return (
    <>
        <h2>Atividade 1</h2>
        <h2 id="relogio"></h2>
    </>
  );
}

function AtualizaRelogio() {
    let dataAtual = new Date();
    let hora = dataAtual.toLocaleTimeString();
    
    const relogioRoot = document.getElementById('relogio');
    if(relogioRoot) {
        relogioRoot.innerHTML = hora + "<br/>";
    }
}

setInterval(AtualizaRelogio, 1000);