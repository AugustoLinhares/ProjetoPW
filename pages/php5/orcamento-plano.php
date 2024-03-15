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
        
        $cpf = $_POST["CPF"];
        $data = $_POST["Data"];
        $valor = $_POST["Valor"];
        $id_usu_fk = $_POST["id_usu_fk"];
        

        $sql = "INSERT INTO venda (CPF, Data, Valor, id_usu_fk) VALUES ('$cpf', '$data', '$valor', null);";

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