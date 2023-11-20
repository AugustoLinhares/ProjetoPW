AlterarPagina();
function DefinirPlano() {

    const parametros = (location.search).replace('?plano=', '');

    const pleno = {
        titulo: 'Plano Pleno',
        preco: 499.99,
        imagem: '../Imagens/ImagensPedro/imagensPlanos/planopleno.png',
        texto: 'O plano Pleno é melhor custo benefício para você que gosta de conhecer receitas novas e sofisticadas.',
        beneficios1: {
            beneficiosTitulo: 'Todas as receitas',
            beneficiosTexto: 'Este plano te dá acesso a todas as receitas em um plataforma completa.'
        },
        beneficios2: {
            beneficiosTitulo: 'Aparelhos conectados',
            beneficiosTexto: 'Até 3 aparelhos conectados em sua conta ao mesmo tempo.'
        },
        beneficios3: {
            beneficiosTitulo: 'Livro todo mês',
            beneficiosTexto: 'Receba em casa um e-book com receitas atualizadas, sendo receitas típicas, nacionais ou internacionais.'
        },
        beneficios4: {
            beneficiosTitulo: 'Acesso offline',
            beneficiosTexto: 'Acesso a plataforma inteira offline, para você acessar suas receitas favoritas de qualquer lugar.'
        }

    }

    const junior = {
        titulo: 'Plano júnior',
        preco: 150.00,
        imagem: '../Imagens/ImagensPedro/imagensPlanos/planojunior.png',
        texto: 'O plano Júnior é melhor custo benefício para você que está começando a cozinhar e quer se especializar.',
        beneficios1: {
            beneficiosTitulo: 'Descontos de até 50%',
            beneficiosTexto: 'Descontos de até 50% em nossos e-books completos.'
        },
        beneficios2: {
            beneficiosTitulo: '1 mês de acesso',
            beneficiosTexto: '1 mês de acesso total a plataforma sem anúcios.'
        },
        beneficios3: {
            beneficiosTitulo: '1 dispositivo',
            beneficiosTexto: 'Acesse todo o nosso conteudo na palma da sua mão.'
        },
        beneficios4: {
            beneficiosTitulo: '1 livro com as principais receitas',
            beneficiosTexto: 'Acesse o melhor livro de receitas do mundo premiado pelo Gourmand World Cookbook.'
        }


    }

    const senior = {
        titulo: 'Plano Sênior',
        preco: 299.99,
        imagem: '../Imagens/ImagensPedro/imagensPlanos/planosenior.png',
        texto: 'O plano Sênior é melhor custo para você que já é profissional na cozinha.',
        beneficios1: {
            beneficiosTitulo: 'Acesso a todas as receitas.',
            beneficiosTexto: 'Acesse todas as receitas disponiveis em nosso sistema sem nenhuma restrição.'
        },
        beneficios2: {
            beneficiosTitulo: '1 livro com as principais receitas',
            beneficiosTexto: 'Acesse o melhor livro de receitas do mundo premiado pelo Gourmand World Cookbook.'
        },
        beneficios3: {
            beneficiosTitulo: '1 ano de acesso',
            beneficiosTexto: '1 ano de acesso total a plataforma sem anúcios.'
        },
        beneficios4: {
            beneficiosTitulo: 'até 2 dispositivos',
            beneficiosTexto: 'Até 2 aparelhos conectados em sua conta ao mesmo tempo.'
        }

    }

    if (parametros == 'junior') {
        return junior;

    }
    else if (parametros == 'senior') {
        return senior;

    }
    else if (parametros == 'pleno') {
        return pleno;
    }

}
function AlterarPagina() {
    const plano = DefinirPlano();
    //alterar preço
    const precoP = document.querySelector('p.font-2-xl.cor-5');
    precoP.innerHTML = "R$ " + plano.preco;
    //alterar titulo
    const tituloH1 = document.querySelector('h1.font-1-xxl.cor-0');
    tituloH1.innerHTML = plano.titulo
    //alterar texto
    const textoP = document.querySelector('p.font-2-l.cor-5');
    textoP.innerHTML = plano.texto
    //beneficios
    var beneficioTituloH3 = document.querySelector('ul.bicicleta-informacoes>li:nth-child(1)>h3');
    beneficioTituloH3.innerHTML = plano.beneficios1.beneficiosTitulo;
    var beneficioTituloP = document.querySelector('ul.bicicleta-informacoes>li:nth-child(1)>p');
    beneficioTituloP.innerHTML = plano.beneficios1.beneficiosTexto;
    //beneficios 2
    beneficioTituloH3 = document.querySelector('ul.bicicleta-informacoes>li:nth-child(2)>h3');
    beneficioTituloH3.innerHTML = plano.beneficios2.beneficiosTitulo;
    beneficioTituloP = document.querySelector('ul.bicicleta-informacoes>li:nth-child(2)>p');
    beneficioTituloP.innerHTML = plano.beneficios2.beneficiosTexto;
    //beneficios 3
    beneficioTituloH3 = document.querySelector('ul.bicicleta-informacoes>li:nth-child(3)>h3');
    beneficioTituloH3.innerHTML = plano.beneficios3.beneficiosTitulo;
    beneficioTituloP = document.querySelector('ul.bicicleta-informacoes>li:nth-child(3)>p');
    beneficioTituloP.innerHTML = plano.beneficios3.beneficiosTexto;
    //beneficios 4
    beneficioTituloH3 = document.querySelector('ul.bicicleta-informacoes>li:nth-child(4)>h3');
    beneficioTituloH3.innerHTML = plano.beneficios4.beneficiosTitulo;
    beneficioTituloP = document.querySelector('ul.bicicleta-informacoes>li:nth-child(4)>p');
    beneficioTituloP.innerHTML = plano.beneficios4.beneficiosTexto;
    //foto
    // Galeria de Bicicletas
    const galeria = document.querySelectorAll(".bicicleta-imagens img");
    const galeriaContainer = document.querySelector(".bicicleta-imagens");

    const imgPleno = document.querySelector(".bicicleta-imagens img:nth-child(1)");
    const imgSenior = document.querySelector(".bicicleta-imagens img:nth-child(2)");
    const imgJunior = document.querySelector(".bicicleta-imagens img:nth-child(3)");

    if (plano.titulo == 'Plano júnior') {
        galeriaContainer.prepend(imgJunior);
        console.log(plano.titulo);
    }
    else if (plano.titulo == 'Plano Sênior') {
        galeriaContainer.prepend(imgSenior);
        console.log(plano.titulo);
    }
    else {
        console.log(plano.titulo);
    }

}