const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{        
            console.log(evento.target)
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
    if(campo.name === "tempero"){
        if(campo.value.length<5){
            msnErro.textContent = "Digite os temperos";
        }else{
            msnErro.textContent="";
        }
    }
}

const botoes = document.querySelectorAll("[data-item]");
botoes.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        AtualizaItem(evento.target.textContent, evento.target.parentNode);
    });

});

function AtualizaItem(acao, inputQtde){
  const item = inputQtde.querySelector("[data-qtde]");
  if(acao==="-"){
        item.value = parseInt(item.value)-1;
    }
    else{
        item.value = parseInt(item.value)+1;
    }
    
}

function validate(){
    const event = document.querySelector("#Tipo");
    //console.log(event.target);
    if (document.getElementById("Tipo").value == "0") {
        alert("Selecione um campo");
    }    
}
