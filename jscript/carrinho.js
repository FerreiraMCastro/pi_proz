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
                <h2>R$ <span class="precoprod">${produtos.preco}</span></h2>
                <form>
                <label>Quantidade: </label><input type="number" value="1" width="10" size="3">
                </form>
                <p><span class="subtotal"></span></p>
            </div>
        `;
        const listaCarrinho = document.querySelector('#listaCarrinho');
        listaCarrinho.appendChild(produto);
    }
    atualizaSubtotal();
}

function atualizaSubtotal() {
    const quantidades = document.querySelectorAll('input[type="number"]');
    const precosprod = document.querySelectorAll('.precoprod');
    const subtotais = document.querySelectorAll('.subtotal');
    const totalpedido = document.querySelector('#totalpedido');
    let valortotal = 0;
    for (let i=0; i<quantidades.length; i++) {
        const quantidade = quantidades[i];
        const precoprod = Number(precosprod[i].textContent);
        const valor = quantidade.value * precoprod;
        valortotal += valor;
        subtotais[i].textContent = valor;
    }
    totalpedido.textContent = Number(valortotal).toFixed(2);
}

function atualizaQuantidades() {
    const quantidades = document.querySelectorAll('input[type="number"]');
    for (let i=0; i<quantidades.length; i++) {
        const quantidade = quantidades[i];
        quantidade.addEventListener('change', function() {
            atualizaSubtotal();
        });
    }
}

exibeCarrinho();
atualizaQuantidades();
//atualizaSubtotal();