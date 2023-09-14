<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    require_once('conexao.php');
    
    $Titulo = $_POST["Titulo"];
    $Adicional = $_POST["Adicional"];
    $Descricao = $_POST["Descricao"];
    $Imagem = $_POST["Imagem"];
    $Ingrediente = $_POST["Ingrediente"];
    $TempoPrep = $_POST["TempoPrep"];
    $Dificuldade = $_POST["Dificuldade"];
    $Porcao = $_POST["Porcao"];
    $Passo = $_POST["Passo"];


    $sql = "INSERT INTO receita VALUES ('$Titulo', '$Adicional', '$Descricao', '$Imagem', '$Ingrediente', '$TempoPrep', '$Dificuldade', '$Porcao', '$Passo');";

    if ($conn->query($sql) === TRUE) {
        echo"Dados inseridos com sucesso!";
    } else {
        echo"Erro na inserção: " . $conn->error;
    }

    $conn->close();
}
else{
    echo "Erro Dados";
}
?>


