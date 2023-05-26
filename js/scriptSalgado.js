const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento)=>{
    elemento.addEventListener("blur", (evento)=>{
        if(evento.target.name==='nome'){
            console.log(evento.target.maxlength);    
        }
    });
});