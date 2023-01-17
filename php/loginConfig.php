<?php

include_once 'conexcionBD.php';
$conexion = new Conexion();

if(!empty($_POST["btnIngresar"])){
    if (!empty($_POST["usuario"]) and !empty($_POST["contrasena"])) {
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];

        $sql ="SELECT rol ,count(`id_user`) AS 'existe' FROM `usuarios` WHERE `nickname` = '$usuario' AND `password` = '$contrasena';";
        $stmt =$conexion->conectar()->prepare($sql);
        $stmt-> execute();

        while ($item=$stmt->fetch()){
            $existe_usuario = $item['existe'];
            $rol = $item['rol'];
        }
        
        if($existe_usuario ==1){
            session_start();
            switch($rol){
                case 1: //En caso de que sea Administrador
                    $_SESSION['nickname'] = $usuario;
                    header("location:../Administrador/plantilla.html");
                break;
                case 2: //En caso de que sea Developer
                    $_SESSION['nickname'] = $usuario;
                    header("location:../Administrador/plantilla.html");
                break;
                case 3: //En caso de que sea Usuario
                    $_SESSION['nickname'] = $usuario;
                    header("location:../Usuarios/plantilla.html");
                break;
                case 4: //en caso de que sea Master
                    $_SESSION['nickname'] = $usuario;
                    header("location:../Administrador/plantilla2.html");
                break;
                case 4: //En caso de que el usuario no tenga un rol 
                    header("location:../Usuarios/plantilla.html");
                break;
            }

        }else{
            header('Location: ../login.php?error=UsuarioInexistente');
        }
        
    } else {
        header('Location: ../login.php?error=CamposVacios');
        }
    
}


?>