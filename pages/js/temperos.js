
// Feito por Camila Ortolane

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
            msnErro.textContent = "* O nome deve ter mais de 4caracteres";
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


}