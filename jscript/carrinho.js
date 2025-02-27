/* CRIA UM OBJETO QUE VAI RECEBER OS ITENS QUE FORAM INSERIDOS NO CARRINHO */
const itensDB = [];

function carregaItensCarrinho(){
    let busca = false; //é necessário (re)buscar?
    let chaveStorage = 0; //em caso de rebusca, inicie com com a chave 0
    const tamanho = localStorage.length; //qual o tamanho do armazenamento local?
    console.log("Tamanho do armazenamento: "+localStorage.length);
    
    if (localStorage.length>0) {
        for (let i=0; i<localStorage.length; i++){
            //console.log("Item a ser carregado: "+localStorage.getItem(i));
            //itensDB[i] = JSON.parse(localStorage.getItem(i)); //carregue o objeto com os dados JSON do armazenamento
            //if (itensDB[i] != null) { //se houver sucesso na carga 
            //    itensDB[i].chave = i; //defina o elemento chave com o valor de i
            //} else { //se não conseguir carregar os dados JSON faça uma (re)busca
                busca = true;
                
                while (busca) {
                    itensDB[i] = JSON.parse(localStorage.getItem(chaveStorage));
                    if (itensDB[i] != null){
                        busca = false;
                        itensDB[i].chave = chaveStorage;
                    }
                    console.log("Indice de busca: "+chaveStorage);
                    console.log("Continuar busca: "+busca);

                    chaveStorage++;
                }
                
            //}
        }
    }
    
    console.log("Total de Itens a exibir: "+itensDB.length);
}

function exibeCarrinho() {
    const listaCarrinho = document.querySelector('#listaCarrinho');
    
    if (itensDB.length>0) {
        for (let i=0; i<itensDB.length; i++) {
            const produto = document.createElement('div');
            const itemCarrinho = itensDB[i];
            produto.classList.add('produto');
            produto.setAttribute('id', 'pID-'+itemCarrinho.id);
            produto.innerHTML = `
                <img src="${itemCarrinho.foto}" alt="${itemCarrinho.nome}" class="prodImagem">
                <div class="prodDetalhes">
                    <h1>${itemCarrinho.nome}</h1>
                    <h2>R$ <span class="precoprod">${itemCarrinho.preco}</span></h2>
                    <form>
                    <label>Quantidade: </label><input type="number" value="1" width="10" size="3" min="1">
                    <img src="img/bin-preto.png" class="lixeira" onClick="removerProduto(${itemCarrinho.id}, ${itemCarrinho.chave});"">
                    </form>
                    <p><span class="subtotal"></span></p>
                </div>
            `;
            listaCarrinho.appendChild(produto);
        }
        atualizaSubtotal();
    } else {
        const produto = document.createElement('div');
        produto.innerHTML = `
            <h1>Não há produtos em seu carrinho</h1>
        `;
        listaCarrinho.appendChild(produto);
    }
}

function removerProduto(produtoID, chaveStorage){
    //REMOVE O PRODUTO DO localstorage
    localStorage.removeItem(Number(chaveStorage));
    
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
