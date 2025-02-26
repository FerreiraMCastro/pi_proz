/* CRIA UM OBJETO QUE VAI RECEBER OS ITENS QUE FORAM INSERIDOS NO CARRINHO */
const itensDB = [];

function carregaItensCarrinho(){
    for (let i=0; i<localStorage.length; i++){
        console.log(localStorage.getItem("itemCarrinho-"+i));
        itensDB[i] = JSON.parse(localStorage.getItem("itemCarrinho-"+i));
        console.log(itensDB[i]);
    }
}

function exibeCarrinho() {
    const produto = document.createElement('div');
    const listaCarrinho = document.querySelector('#listaCarrinho');
    
    if (itensDB.length<=0){
        produto.innerHTML = `
            <h1>Não há produtos em seu carrinho</h1>
        `;
    } else {
        for (let i=0; i<itensDB.length; i++) {
            const produtos = itensDB[i];
            produto.classList.add('produto');
            produto.setAttribute('id', 'pID-'+produtos.id);
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
            listaCarrinho.appendChild(produto);
        }
        atualizaSubtotal();
    }
}

function removerProduto(produtoID){
    //REMOVE O PRODUTO DO localstorage
    localStorage.removeItem(Number(produtoID));
    
    //REMOVE O PRODUTO DA PAGINA DE CARRINHO
    const Carrinho = document.getElementById('listaCarrinho'); //captura o elemento pai
    const itemCarrinho = document.getElementById('pID-'+produtoID); // captura o elemento filho
    Carrinho.removeChild(itemCarrinho); //remove do elemento pai o elemento filho
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


carregaItensCarrinho();
exibeCarrinho();
atualizaQuantidades();
//atualizaSubtotal();
