<?php 
$_conn = mysqli_connect('127.0.0.1','root','','php5');
if($_conn===FALSE) {
 echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
 echo "Foi possível conectar ao Servidor de banco de dados ";
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && $_SERVER["REQUEST_METHOD"] == "FILES") {

    require_once('php5.php');
    
    $Titulo = $_POST["Titulo"];
    $Adicional = $_POST["Adicional"];
    $Descricao = $_POST["Descricao"];
    //$Imagem = $_FILES["Imagem"];
    $Ingrediente = $_POST["Ingrediente"];
    $TempoPrep = $_POST["TempoPrep"];
    $Dificuldade = $_POST["Dificuldade"];
    $Porcao = $_POST["Porcao"];
    $Passo = $_POST["Passo"];
    $Fk = $_POST["id_usu_fk"];
    

 

    $sql = "INSERT INTO receita VALUES (null, '$Titulo', '$Adicional', '$Descricao', '$Ingrediente', '$TempoPrep', '$Dificuldade', '$Porcao', '$Passo', '$Fk');";


    
    if ($_conn->query($sql) === TRUE) {
        echo"Dados inseridos com sucesso!";
    } 
    else {
        echo"Erro na inserção: " . $_conn->error;
    }

    $_conn->close();
}else{
    echo "Erro Dados";
}
?>


