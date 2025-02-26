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
    { 
        id: 4,
        categoria: 'masculino',
        nome: 'Bermuda Moletom', 
        preco: 37.91,
        foto: 'produtos/bermuda-cinza-1.jpg',
    },
    { 
        id: 5,
        categoria: 'masculino',
        nome: 'Camiseta', 
        preco: 54.91,
        foto: 'produtos/camisaverde.png',
    },
    { 
        id: 6,
        categoria: 'masculino',
        nome: 'Camisa Masculina CaFe', 
        preco: 69.99,
        foto: 'produtos/camisaCaFe.jpg',
    },
    { 
        id: 7,
        categoria: 'masculino',
        nome: 'Conjunto Güthier Litoral', 
        preco: 289,
        foto: 'produtos/ConjuntoGuthierLitoral.webp',
    },
    { 
        id: 8,
        categoria: 'masculino',
        nome: 'Pulseira Feng Elephant', 
        preco: 139.99,
        foto: 'produtos/PULSEIRAFENGELEPHANT.webp',
    },
    { 
        id: 9,
        categoria: 'masculino',
        nome: 'Bracelete Zeus Trama a Mão', 
        preco: 69.99,
        foto: 'produtos/BraceleteZeusTramaaMao.webp',
    },
    { 
        id: 10,
        categoria: 'masculino',
        nome: 'Conjunto Güthier Pascoal', 
        preco: 69.99,
        foto: 'produtos/ConjuntoGuthierPascoal.webp',
    },
    { 
        id: 11,
        categoria: 'feminino',
        nome: 'Blusa Feminina Viscose Estampada', 
        preco: 49.90,
        foto: 'produtos/BlusaFemininaViscoseEstampada.webp',
    },
    { 
        id: 12,
        categoria: 'feminino',
        nome: 'Blusa Feminina de Viscose Branca Estampa', 
        preco: 36.36,
        foto: 'produtos/BlusaFemininadeViscoseBrancaEstampa.webp',
    },
    { 
        id: 13,
        categoria: 'feminino',
        nome: 'Bolsa Feminina Sintético Caramelo', 
        preco: 79.00,
        foto: 'produtos/bolsa-Caramelo-10.webp',
    },
    { 
        id: 14,
        categoria: 'feminino',
        nome: 'Camisetas Unissex Lisas', 
        preco: 32.90,
        foto: 'produtos/camiseta-Azul-Petroleo.webp',
    },
    { 
        id: 15,
        categoria: 'feminino',
        nome: 'Vestido Curto Alcinha Viscose Estampa', 
        preco: 50.00,
        foto: 'produtos/vestido-Rosa-estampa-folhas-alcinha.webp',
    },
    { 
        id: 16,
        categoria: 'feminino',
        nome: 'Vestido Curto Viscose', 
        preco: 50.00,
        foto: 'produtos/VestidoCurtoViscose.webp',
    },
    { 
        id: 17,
        categoria: 'feminino',
        nome: 'Vestido Curto Viscose Lisa', 
        preco: 50.00,
        foto: 'produtos/7004-Rosa-claro-Veste-38-40-manga-curta-bufante-1.webp',
    },
    { 
        id: 18,
        categoria: 'feminino',
        nome: 'Carteira/Necessarie Feminina Cor Rosa com listras marrom Firme e Leve', 
        preco: 17.90,
        foto: 'produtos/carteira-feminina-listrada.webp',
    },
    { 
        id: 19,
        categoria: 'feminino',
        nome: 'Bolsa Tecido Jeans Feminina Pequena', 
        preco: 49.90,
        foto: 'produtos/Bolsa-Jeans-Pequena-1-e1711413567665.webp',
    },
    { 
        id: 20,
        categoria: 'feminino',
        nome: 'Bolsa Tecido Impermeável', 
        preco: 85.00,
        foto: 'produtos/Bolsa-bege-flores-impermeavel-2.webp',
    },
]

/*FUNÇÕES DE GESTÃO DOS PRODUTOS*/

function exibeProdutos(categoria) {
    for (let i=0; i<produtosDB.length; i++) {
        if (categoria == produtosDB[i].categoria) {
            const produto = document.createElement('div');
            produto.classList.add('cardProduto');
            produto.innerHTML = `
                <img src="${produtosDB[i].foto}" alt="${produtosDB[i].nome}">
                <div class="infoProduto">
                    <h2>${produtosDB[i].nome}</h2>
                    <p>${produtosDB[i].preco}</p>
                    <button class="btnComprar" onclick="colocarNoCarrinho(${produtosDB[i].id})">Comprar</button>
                </div>`;
            const listaProdutos = document.querySelector('#listaProdutos');
            listaProdutos.appendChild(produto);
        }
    }
}

function colocarNoCarrinho(id){
    if (window.localStorage){
        let itemCarrinho = {};
        for (let i=0; i<produtosDB.length; i++){
            if (produtosDB[i].id == id){
                itemCarrinho.id = produtosDB[i].id;
                itemCarrinho.nome = produtosDB[i].nome;
                itemCarrinho.categoria = produtosDB[i].categoria;
                itemCarrinho.preco = produtosDB[i].preco;
                itemCarrinho.foto = produtosDB[i].foto;
            }
        }
        localStorage.setItem("itemCarrinho-"+localStorage.length, JSON.stringify(itemCarrinho));
        let cont = localStorage.length;
        console.log("Contador: "+cont);
        console.log("Itens Armazenados"+localStorage.length);
    }
}

const params = new URLSearchParams(window.location.search);
const categoria = params.get('categoria');

exibeProdutos(categoria);

