<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserção de Dados</title>
</head>
<body>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        require_once('conexao.php');
        
        $datanasc = $_POST["DataNasc"];
        $email = $_POST["Email"];
        $cpf = $_POST["CPF"];
        $genero = $_POST["Genero"];
        $foto = $_POST["Foto"];
        $nome = $_POST["Nome"];
        $senha = $POST["Senha"];
        $id_log_fk = $_POST["id_log_fk"];

        $sql = "INSERT INTO usuario (DataNasc, Email, CPF, Genero, Foto, Nome, Senha, id_log_fk) VALUES ('$datanasc', '$email', '$cpf', '$genero', '$foto', '$nome','$senha', null);";

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

</body>
</html>
    
</body>
</html>