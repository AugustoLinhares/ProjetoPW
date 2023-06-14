document.querySelector("form").addEventListener("submit", (event) => {
    document.querySelectorAll("input").forEach(function (input) {
        input.addEventListener("focus", function () {
            const el = event.target || event.srcElement;
            const id = el.id.substring(3);

            if (event.target.value == "" || event.target.value == null) {
                alert(id + " não informado");
                event.preventDefault();
            }

            console.log(id);
        });
    });

    document.querySelectorAll("select").forEach(function (select) {
        if (select.value == "" || select.value == null) {
            alert("Selecione um item da lista");
            select.focus();
            event.preventDefault();
        }
    });
});


const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    console.log("input", input)
    input.addEventListener("blur", (event) => {
        if (event.target.value == "" || event.target.value == null) {
            alert("Campo não informado");
            event.preventDefault();
            input.focus();
        }
    });
});

