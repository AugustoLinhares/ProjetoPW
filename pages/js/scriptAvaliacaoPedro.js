//Feito Por Pedro Henrique de Melo Batista


document.getElementById("btn").addEventListener("click", function () {
    "use strict";
    document.getElementById("ovrly").style.display = "block";
    document.getElementById("avaliacao").style.display = "block";
    document.getElementById("avaliacao").style.top = "100px";
});

document.getElementById("ovrly").addEventListener("click", function () {
    "use strict";
    document.getElementById("ovrly").style.display = "none";
    document.getElementById("avaliacao").style.display = "none";
    document.getElementById("avaliacao").style.top = "-310px";
});

document.getElementById("cross").addEventListener("click", function () {
    "use strict";
    document.getElementById("ovrly").style.display = "none";
    document.getElementById("avaliacao").style.display = "none";
    document.getElementById("avaliacao").style.top = "-310px";
});
