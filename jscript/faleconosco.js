let inputContato = document.getElementById('nomecontato');
//let contatoLabel = document.querySelector('label[for="nomecontato"]');
let contatoHelper = document.getElementById("nomecontato-helper");

let inputEmail = document.getElementById('email');
//let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

let inputWhatsapp = document.getElementById('whatsapp');
//let whatsappLabel = document.querySelector('label[for="whatsapp"]');
let whatsappHelper = document.getElementById("whatsapp-helper");

let inputMensagem = document.getElementById('mensagem');
//let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemHelper = document.getElementById("mensagem-helper");


function validarInput(input, min, helper){
    input.addEventListener("input", function(elemento){
        let valorInput = elemento.target.value;
        if(valorInput.length < min){
            input.classList.add("input-error");
            helper.classList.remove("error-deactive");
            helper.classList.add("error-active");
            helper.textContent = `O campo precisa ter no mínimo ${min} caracteres.`;
        } else {
            input.classList.remove("input-error");
            helper.classList.remove("error-active");
            helper.classList.add("error-deactive");
            helper.textContent = "";
        }
        console.log(valorInput);
    });
}

function formatarCelular(celular){
    //cria a variável celularFormatado e usa o método replace para formatar o celular
    //onde $1 possui 2 dígitos, $2 possui 5 dígitos e $3 possui 4 dígitos
    // sendo o $1 colocado entre parenteses e o $2 separado do $3 por um hífen
    let celularFormatado = celular.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    
    //retorna o celular formatado
    return celularFormatado;
}

inputWhatsapp.addEventListener("input", function(elemento){
    let valorInput = elemento.target.value;
    let valorFormatado = formatarCelular(valorInput);
    elemento.target.value = valorFormatado;
});

validarInput(inputContato, 6, contatoHelper);
validarInput(inputEmail, 6, emailHelper);
validarInput(inputWhatsapp, 11, whatsappHelper);
validarInput(inputMensagem, 20, mensagemHelper);
