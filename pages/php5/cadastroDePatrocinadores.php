<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserção de Dados - Patrocinador</title>
</head>
<body>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        require_once('conexao.php');
        
        $numero = $_POST["Numero"];
        $bairro = $_POST["Bairro"];
        $nomeFant = $_POST["NomeFant"];
        $pais = $_POST["Pais"];
        $cnpj = $_POST["CNPJ"];
        $telefone = $_POST["Telefone"];
        $email = $_POST["Email"];
        $municipio = $_POST["Municipio"];
        $estado = $_POST["Estado"];
        $rua = $_POST["Rua"];
        $id_log_fk = $_POST["id_log_fk"];

        $sql = "INSERT INTO patrocinador (Numero, Bairro, NomeFant, Pais, CNPJ, Telefone, Email, Municipio, Estado, Rua, id_log_fk) VALUES ('$numero', '$bairro', '$nomeFant', '$pais', '$cnpj', '$telefone', '$email', '$municipio', '$estado', '$rua', null);";

        if ($conn->query($sql) === TRUE) {
            echo"Dados inseridos com sucesso!";
        } else {
            echo"Erro na inserção: " . $conn->error;
        }
    
        $conn->close();
    }
    else{
        echo "Erro ao acessar o banco de dados";
    }
    ?>
</body>
</html>
    
</body>
</html>