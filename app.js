function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Variável para rastrear se a resposta está visível
    let respostaEstaVisivel = false;

    // Função para alternar a visibilidade da resposta (virar o cartão)
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique para virar o cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão criado ao container
    container.appendChild(cartao);
}

// Exemplo de uso da função criaCartao
// Pode ser removido ou ajustado conforme necessário
// criaCartao("Programação", "O que é JavaScript?", "JavaScript é uma linguagem de programação.");
criaCartao("Matemática", "Qual é o valor de Pi?", "O valor de Pi é aproximadamente 3,14159.");
