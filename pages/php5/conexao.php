]<?php 
$_conn = mysqli_connect('127.0.0.1','root','','php5');
if($_conn===FALSE) {
 echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
 echo "Foi possível conectar ao Servidor de banco de dados ";
 mysqli_close($_conn);
}
?>
