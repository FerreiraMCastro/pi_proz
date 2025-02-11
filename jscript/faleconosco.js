let inputContato = document.getElementById('nomecontato');
let usernameLabel = document.querySelector('label[for="nomecontato"]');
let usernameHelper = document.getElementById("nomecontato-helper");

let inputEmail = document.getElementById('email');
let emailLabel = document.querySelector('label[for="emailcontato"]');
let emailHelper = document.getElementById("emailcontato-helper");

let inputWhatsapp = document.getElementById('whatsapp');

let inputMensagem = document.getElementById('mensagem');

function validarFormulario(){
    let nomeContato = inputContato.value;
    let emailContato = inputEmail.value;
    let mensagemContato = inputMensagem.value;

    if(nomeContato.length < 3){
        alert("O campo nome precisa ter no mínimo 3 caracteres.");
    }

    if(emailContato.length < 3){
        alert("O campo email precisa ter no mínimo 3 caracteres.");
    }

    if(mensagemContato.length < 3){
        alert("O campo mensagem precisa ter no mínimo 3 caracteres.");
    }
}


function validarInput(input, min, helper){
    input.addEventListener("blur", function(elemento){
        let valorInput = elemento.target.value;
        if(valorInput.length < min){
            alert(`O campo precisa ter no mínimo ${min} caracteres.`);
        }
    });
}

validarInput(inputContato, 3);


btnEnviar.addEventListener('click', validarFormulario);

