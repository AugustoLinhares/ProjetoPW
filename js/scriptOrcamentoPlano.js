MarcarPlano();

function MarcarPlano() {
    const parametros = (location.search).replace('?plano=', '');
    console.log(parametros);
        const radioButton = document.getElementById(parametros);
        radioButton.checked =true;
}
