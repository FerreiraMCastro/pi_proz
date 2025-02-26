//Captura elemento Dom\\

let form = document.querySelector("#form")
let inputNome = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputTel = document.querySelector("#tel");
let inputSenha = document.querySelector("#senha");
let btnSubmit = document.querySelector("#btn");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    //Verificando campo nome preechido e recebe apenas valores "string"
    if(inputNome.value === "" || Number(inputNome.value)){
        alert("Preencha seu nome corretamete");
        return;  
    }

    //Validando um email com padrão (nome@dominio.com.br e caracteres especiais )
    if(inputEmail.value === "" || !validEmail(inputEmail.value)){
        alert("Por favor, preencha seu email corretamente");
        return;
    }
    //Validação aceita apenas números e com DDD
    if(!Number(inputTel.value) || inputTel.value.length < 11){
        alert("Informe um telefone válido com DDD");
        return;
    }
    //Validação tamanho mínimo de senha
    if(!validPassword(inputSenha.value, 6)){
        alert("A senha deve ter no mínimo 6 dígitos!");
        return;
    } 
    
    //Envio do form direto pelo JS
    form.submit()
    alert("Seu cadastro foi realizado!")
   
});



//FUNÇÕES GENÉRICAS


//VALIDA EMAIL\\
function validEmail(email){

    //Usando o Regex para verificar os caracteres válidos para o email\\
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

   if(emailRegex.test(email)){
    return true;
   }

   return false;
}

//VALIDA SENHA \\

function validPassword(password, minDigts){
    if(password.length >= minDigts){
        return true
    }
    return false;

}


