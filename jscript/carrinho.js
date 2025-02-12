const produtosDB = [
    { 
        id: 1,
        categoria: 'masculino',
        nome: 'Kit 5 camisetas', 
        preco: 59.99,
        foto: 'produtos/kit5camisetas.webp',
    },
    { 
        id: 2,
        categoria: 'masculino',
        nome: 'Tenis Olympikus', 
        preco: 89.99,
        foto: 'produtos/tenisOlympikus.webp',
    },
    { 
        id: 1,
        categoria: 'masculino',
        nome: 'Calça Cargo', 
        preco: 69.99,
        foto: 'produtos/calcaCargo.jpeg',
    },
]

function exibeCarrinho() {
    for (let i=0; i<produtosDB.length; i++) {
        const produtos = produtosDB[i];
        const produto = document.createElement('div');
        produto.classList.add('produto');
        produto.innerHTML = `
            <img src="${produtos.foto}" alt="${produtos.nome}" class="prodImagem">
            <div class="prodDetalhes">
                <h1>${produtos.nome}</h1>
                <h2>R$ ${produtos.preco}</h2>
                <form>
                <label>Quantidade: </label><input type="number" value="1" size="3">
                </form>
                <label>Subtotal: R$ 100,00</label>
        `;
        const listaCarrinho = document.querySelector('#listaCarrinho');
        listaCarrinho.appendChild(produto);
    }
}

exibeCarrinho();