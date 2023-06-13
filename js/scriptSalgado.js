const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{        
            validaCampo(evento.target)      
    });
});

function validaCampo(campo){
    const msnErro = campo.parentNode.querySelector("[data-erro]");
    if(campo.name === "nome"){
        if(campo.value.length<5){
            msnErro.textContent = "Digite o nome completo";
        }else{
            msnErro.textContent="";
        }
    }
    if(campo.name === "descricao"){
        if(campo.value.length<5){
            msnErro.textContent = "Digite uma descrição prévia da receita";
        }else{
            msnErro.textContent="";
        }
    }
    if(campo.name === "ingrediente"){
        if(campo.value.length<5){
            msnErro.textContent = "Digite os ingredientes necessários na receita";
        }else{
            msnErro.textContent="";
        }
    }
    if(campo.name === "passos"){
        if(campo.value.length<5){
            msnErro.textContent = "Digite o passo a passo da receita";
        }else{
            msnErro.textContent="";
        }
    }
    if(campo.name === "informacao"){
        if(campo.value.length<5){
            msnErro.textContent = "Digite as informações adicionais da receita";
        }else{
            msnErro.textContent="";
        }
    }
}

if (document.getElementById("Tipo").value === "0"){
    msnErro.textContent = "Selecione um campo";
}else{
    msnErro.textContent="";
}

// function validar() {
//     var facil = fOcorrencia.facil.value;
//     var medio = fOcorrencia.medio.value;
//     var dificil = fOcorrencia.dificil.value;
    
//     //captura o número de itens "selecionados"
//     var Tipo = document.querySelectorAll('input[name="Tipo"]:checked').length;    
  
//     if (facil == "") {
//         alert("Preencha todos os campos");
//         return false;
//     }
//     if (medio == "") {
//         alert("Preencha todos os campos");
//         return false;
//     }
//     if (dificil == "") {
//         alert("Preencha todos os campos");
//         return false;
//     }
//     return true;
// }
