let inputContato = document.getElementById('nomecontato');
let usernameLabel = document.querySelector('label[for="nomecontato"]');
let usernameHelper = document.getElementById("nomecontato-helper");


function validarInput(input, min, helper){
    input.addEventListener("blur", function(elemento){
        let valorInput = elemento.target.value;
        if(valorInput.length < min){
            alert(`O campo precisa ter no mínimo ${min} caracteres.`);
        }
    });
}

validarInput(inputContato, 3);


//btnEnviar.addEventListener('click', validarFormulario);
/*
inputNome.addEventListener('change', function(elemento){
    let valorInput = elemento.target.value;
    console.log(valorInput);
});
*/