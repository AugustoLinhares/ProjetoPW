var formulario = document.querySelectorAll("form");
const inputs = document.querySelectorAll("[required]");
console.log(inputs);

formulario.addEventListener("submit", (event) => {
    if (document.getElementById("senha").value != document.getElementById("senha2").value) {
        alert("Senhas não conferem!");
        event.preventDefault();
        console.log("Senhas não conferem!");
    }
    event.preventDefault();
});

function alerta() {
    alert("Cadastro realizado com sucesso!");
}

inputs.forEach((input) => {
    elemento.addEventListener("blur", (event) => {
        if (event.target.value === "txtNome") {
            console.log(evento.target.maxlenght);
        }


// function verificarUsuario(){
//     if(document.getElementById("usuarioLogin").value != "admin"){
//         alert("Usuário já cadastrado!");
//     }
//     else{
//         document.getElementById("usuarioLogin") = "";
//     }
//     event.preventDefault();
// }