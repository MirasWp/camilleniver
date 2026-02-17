// Tenta reproduzir automaticamente ao carregar a página
window.addEventListener('load', function() {
    const audio = document.getElementById('meuAudio');
    audio.play().catch(function(error) {
        console.log('Autoplay bloqueado pelo navegador:', error);
        // Aqui você pode adicionar lógica extra, como mostrar uma mensagem ao usuário
        // Exemplo: alert('Clique nos controles para tocar a música.');
    });
});

// Gera corações caindo no fundo
document.addEventListener('DOMContentLoaded', function() {
    // Gera corações caindo em fundo
    function gerarCoracoesFundo() {
        const heartsBg = document.querySelector('.hearts-bg');
        for (let i = 0; i < 200; i++) { // Número de corações
            const heart = document.createElement('div');
            heart.className = 'heart-bg';
            heart.innerHTML = '🩷';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsBg.appendChild(heart);
        }
    }
    gerarCoracoesFundo();
});