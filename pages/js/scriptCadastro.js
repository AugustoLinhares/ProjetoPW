var formulario = document.querySelectorAll("form");


formulario.addEventListener("submit", (event) => {
    if(document.getElementById("senha").value != document.getElementById("senha2").value){
        alert("Senhas não conferem!");
        event.preventDefault();
        console.log("Senhas não conferem!");
    }
    event.preventDefault();
});

function alerta(){
    alert("Cadastro realizado com sucesso!");   
}