const input = document.querySelectorAll("[required]");
const textarea = document.querySelectorAll("[required]");

input.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{
        console.log(evento.target.value)
        validacampo(evento.target)
        validaNome(evento.target)
    });
});

function validacampo(campo)
{
    const msnErro = campo.parentNode.querySelector("[data-erro]");

    if(campo.name == "input")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "* Preencha o campo";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "nome")
    {
        if(campo.value.length < 4)
        {
            msnErro.textContent = "* O nome deve ter mais de 4 caracteres";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "cidade")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "* Digite o nome da cidade";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "estado")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "* Digite o nome ou UF do Estado";
        }
        else
        {
            msnErro.textContent="";
        }
    }
    if(campo.name == "pais")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "* Digite o nome do país";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "tempo")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "* Digite o tempo de preparo da receita";
        }
        else
        {
            msnErro.textContent="";
        }
    }

    if(campo.name == "porcao")
    {
        if(campo.value == "")
        {
            msnErro.textContent = "* Digite a quantidade de porções da receita";
        }
        else
        {
            msnErro.textContent="";
        }
    }

}