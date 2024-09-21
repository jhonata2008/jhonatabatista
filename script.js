document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "") {
        alert("Por favor, insira seu nome.");
        event.preventDefault(); 
        return;
    }

    if (email === "" || !emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        event.preventDefault(); 
        return;
    }

    if (rating === "") {
        alert("Por favor, escolha uma avaliação para o site.");
        event.preventDefault(); 
        return;
    }

    if (comment.length > 0 && comment.length < 10) {
        alert("O comentário deve ter pelo menos 10 caracteres.");
        event.preventDefault(); 
        return;
    }

    alert("Formulário enviado com sucesso!");
    
});
