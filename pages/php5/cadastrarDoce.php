<?php 
$_conn = mysqli_connect('127.0.0.1','root','','php5');
if($_conn===FALSE) {
 echo "Não foi possível conectar ao Servidor de banco de dados ";
 echo "Erro Dados";
} 
else {
      
    $Titulo = $_POST["Titulo"];
    $Adicional = $_POST["Adicional"];
    $Descricao = $_POST["Descricao"];
    //$Imagem = $_FILES["Imagem"];
    $Ingrediente = $_POST["Ingrediente"];
    $TempoPrep = $_POST["TempoPrep"];
    $Dificuldade = $_POST["Dificuldade"];
    $Porcao = $_POST["Porcao"];
    $Passo = $_POST["Passo"];
    $id_usu_fk = $_POST["id_usu_fk"];
    
    $sql = "INSERT INTO receita (Titulo, Adicional,	Descricao,	Ingrediente, TempoPrep,	Dificuldade, Porcao, Passo) VALUES ('$Titulo', '$Adicional', '$Descricao', '$Ingrediente', '$TempoPrep', '$Dificuldade', '$Porcao', '$Passo', null);";
    
    if ($_conn->query($sql) === TRUE) {
        echo"Dados inseridos com sucesso!";
    } 
    else {
        echo"Erro na inserção: " . $_conn->error;
    }

    $_conn->close();
}
?>


