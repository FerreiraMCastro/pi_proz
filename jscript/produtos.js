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
        foto: 'produtos/calcaCargo.webp',
    },
]


function exibeProdutos() {
    const produto = produtosDB[i];
    const card = `
        <div class="cardProduto">
            <img src="${produto.foto}" alt="${produto.nome}">
            <div class="infoProduto">
                <h2>${produto.nome}</h2>
                <p>${produto.preco}</p>
                <button>Comprar</button>
            </div>
        </div>`;    
}

