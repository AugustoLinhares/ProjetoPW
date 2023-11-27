<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserção de Dados - Parceiro</title>
</head>
<body>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        require_once('conexao.php');
        
        $bairro = $_POST["Bairro"];
        $nomeFant = $_POST["NomeFant"];
        $pais = $_POST["Pais"];
        $cnpj = $_POST["CNPJ"];
        $ramo = $_POST["Ramo"];
        $telefone = $_POST["Telefone"];
        $servico = $_POST["Servico"];
        $email = $_POST["Email"];
        $municipio = $_POST["Municipio"];
        $estado = $_POST["Estado"];
        $rua = $_POST["Rua"];
        $numero = $_POST["Numero"];
        $id_log_fk = $_POST["id_log_fk"];

        $sql = "INSERT INTO parceiro (Bairro, NomeFant, Pais, CNPJ, Ramo, Telefone, Servico, Email, Municipio, Estado, Rua, Numero, id_log_fk) VALUES ('$bairro', '$nomeFant', '$pais', '$cnpj', '$ramo', '$telefone', '$servico', '$email', '$municipio', '$estado', '$rua', '$numero', null);";

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