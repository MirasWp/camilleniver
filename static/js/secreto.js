const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

function verificar() {
    let nome = document.getElementById("nome").value.trim().toLowerCase();

    if (nome === "maevis") {
        // Removido: music.play(); – agora toca apenas ao abrir a carta
        document.querySelector(".login").style.display = "none";
        envelope.style.display = "block";

        let pedido = localStorage.getItem("pedido");
document.getElementById("mensagem").innerHTML =
`Desde 28 de fevereiro minha vida mudou.<br><br>
Seu pedido foi guardado comigo:<br>
<strong>${pedido}</strong><br><br>
Espero que você consiga aproveitar muito bem seu dia.<br>
Fico feliz com os momentos bons que passamos, por mais que houvesse algumas divergências de ideias.<br>
Agradeço profundamente por ser você a pessoa em quem eu tanto confio.<br>
Que a gente continue criando memórias,<br>
superando tudo juntos<br>
e se escolhendo todos os dias.`;
    } else {
        alert("Nome errado 😅");
    }
}

function abrirCarta() {
    envelope.classList.add("open");
    // Removido: document.getElementById("final").style.display = "block"; – não há #final no HTML

    // Toca a música ao abrir a carta (já tem loop no HTML)
    music.play().catch(function(error) {
        console.log('Reprodução bloqueada pelo navegador:', error);
        // Aqui você pode adicionar lógica extra, como mostrar uma mensagem ao usuário
        // Exemplo: alert('Clique nos controles para tocar a música.');
    });

    /* remove envelope completamente depois da animação */
    setTimeout(() => {
        document.querySelector(".front").remove();
        document.querySelector(".back").remove();
    }, 700);
}

/* CHUVA DE CORAÇÕES */
function criarCoracao() {
    const h = document.createElement("div");
    h.className = "bg-heart";
    h.innerText = Math.random() > 0.5 ? "💖" : "🤍";

    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (Math.random() * 3 + 4) + "s";
    h.style.fontSize = (Math.random() * 15 + 15) + "px";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 8000);
}

setInterval(criarCoracao, 300);