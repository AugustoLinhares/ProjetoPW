//Feito Por Pedro Henrique de Melo Batista
document.querySelector("form").addEventListener("submit", (event) => {
    document.querySelectorAll("input").forEach(function (input) {
        input.addEventListener("focus", function () {
            const el = event.target || event.srcElement;
            const id = el.id.substring(3);

            if (event.target.value == "" || event.target.value == null || document.querySelector("#paragrafoErroEmail").style.display == "Block" || !TestaCPF(cpf.value) || document.querySelector("#paragrafoErroSenha").style.display == "Block" || document.querySelector('#paragrafoErroData').style.display == "Block") {
                event.preventDefault();
            }

            console.log(id);
        });
    });


});

//Verificar Senha
const verificarSenha = document.querySelector("#verificarSenha");
verificarSenha.addEventListener("blur", () => {
    const senha = document.querySelector("#senha");
    if (!validarSenha(senha.value, verificarSenha.value)) {
        console.log("Senhas não conferem");
        const paragrafoErroSenha = document.querySelector("#paragrafoErroSenha");
        paragrafoErroSenha.style.display = "Block";
    }
    else {
        console.log("Senhas conferem");
        const paragrafoErroSenha = document.querySelector("#paragrafoErroSenha");
        paragrafoErroSenha.style.display = "none";
    }
});

function validarSenha(senha, verificarSenha) {

    if (senha == verificarSenha) {
        return true;
    }
    else {
        return false;
    }
}


//Verificar Email
const verificarEmail = document.querySelector("#verificarEmail");
verificarEmail.addEventListener("blur", () => {
    const email = document.querySelector("#email");
    if (!validarEmail(email.value, verificarEmail.value)) {
        console.log("Emails não conferem");
        const paragrafoErroEmail = document.querySelector("#paragrafoErroEmail");
        paragrafoErroEmail.style.display = "Block";
    }
    else {
        console.log("Emails conferem");
        const paragrafoErroEmail = document.querySelector("#paragrafoErroEmail");
        paragrafoErroEmail.style.display = "none";
    }
});


function validarEmail(email, verificarEmail) {

    if (email == verificarEmail) {
        return true;
    }
    else {
        return false;
    }
}


//Verificar CPF
const cpf = document.querySelector(".cpf");

cpf.addEventListener("keypress", () => {
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += ".";
    }
    else if (cpf.value.length == 11) {
        cpf.value += "-";
        TestaCPF(cpf.value);
    }

});

cpf.addEventListener("blur", () => {
    if (!TestaCPF(cpf.value)) {
        console.log("CPF inválido");
    }
    else {
        console.log("CPF válido");
    }
})

function TestaCPF(strCPF) {
    strCPF = retirarMascara(strCPF);
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function retirarMascara(cpf) {
    cpf = cpf.replace(".", "");
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");
    return cpf;
}



//Validar Data
const data = document.querySelector("#dataNascimento");
dataNascimento.addEventListener("blur", () => {

    console.log(data.value);
    if (validarData(data.value)) {
        console.log("Data válida");
        paragrafoErroData.style.display = "none";
    }
    else {
        console.log("Data inválida");
        paragrafoErroData.style.display = "Block";
    }

});

function validarData(data1) {

    var anoAtual = new Date().getFullYear();
    var mesAtual = new Date().getMonth() + 1;
    var diaAtual = new Date().getDate();

    if (mesAtual < 10) {
        mesAtual = "0" + mesAtual;
    }

    var dataAtual = anoAtual + "-" + mesAtual + "-" + diaAtual;

    dataAtual = Date.parse(dataAtual);

    var data = Date.parse(data1);

    console.log("Data atual: " + dataAtual);
    console.log("Data: " + data);

    var dataConfirmacao = false;

    if (data > Date.now()) {
        console.log("Data está a frente");;
    }
    else {
        console.log("Data está atrasada");
        dataConfirmacao = true;
    }

    if (data1 != "" && dataConfirmacao == true) {
        return true;
    }
    else {
        false;
    }

}
