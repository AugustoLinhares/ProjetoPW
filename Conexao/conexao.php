<?php 
$_con = mysqli_connect('127.0.0.1','root','','bd_php5');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados ";
    // Exemplo: SQL query
    // $result = mysqli_query($_con, "use bd_escola;");
    $query = "SELECT * FROM usuario";
    $result = mysqli_query($_con, $query);
    mysqli_close($_con);
}
?>