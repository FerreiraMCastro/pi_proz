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
        id: 3,
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
        produto.classList.add('pID-'+produtos.id);
        produto.innerHTML = `
            <img src="${produtos.foto}" alt="${produtos.nome}" class="prodImagem">
            <div class="prodDetalhes">
                <h1>${produtos.nome}</h1>
                <h2>R$ <span class="precoprod">${produtos.preco}</span></h2>
                <form>
                <label>Quantidade: </label><input type="number" value="1" width="10" size="3" min="1">
                <img src="img/bin-preto.png" class="lixeira" onClick="removerProduto(${produtos.id});" id="${produtos.id}">
                </form>
                <p><span class="subtotal"></span></p>
            </div>
        `;
        const listaCarrinho = document.querySelector('#listaCarrinho');
        listaCarrinho.appendChild(produto);
    }
    atualizaSubtotal();
}

function removerProduto(produtoID){
    const Carrinho = document.getElementById('listaCarrinho');
    const itensCarrinho = Carrinho.getElementsByClassName('produto');
    console.log('ID de busca: pID-'+produtoID);
    console.log('Tamanho da lista: '+itensCarrinho.length);
    for (let i=0; i<itensCarrinho.length; i++){
        console.log('Item da Lista: pID-'+i);
        console.log(itensCarrinho[i].value);
        if (itensCarrinho[i].value = 'pID-'+produtoID){
            Carrinho.removeChild(itensCarrinho[i]);
            console.log('Remover Item: '+itensCarrinho[i].value);
        }
    }
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