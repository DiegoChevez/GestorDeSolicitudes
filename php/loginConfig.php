<?php

if(!empty($_POST["btnIngresar"])){
    if (!empty($_POST["usuario"]) and !empty($_POST["contrasena"])) {
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];

        $sql=$conexion->query("SELECT * FROM usuarios WHERE nickname = '$usuario' AND password = '$contrasena'");
        if ($datos = $sql->fetch_object()) {
            $consulta=$conexion->query("SELECT rol FROM usuarios WHERE nickname = '$usuario' AND password = '$contrasena'");
            if($consulta->fetch_object()== "1" or "2"){ //Si es Admin o Develop
                header("location:Administrador/plantilla.html");
                print_r($consulta) ;
            }else{
                if($consulta->fetch_object()== "3"){ //Si es Usuario
                    header("location:Usuarios/plantilla.html");
                    print_r($consulta) ;
                }else{
                    if($consulta->fetch_object()== "4"){ //Si es Master
                        header("location:Administrador/plantilla2.html");
                        print_r($consulta) ;
                    }
                }
            }
        } else {
            echo "Acceso Denegado";
        }
        
    } else {
        echo "Campos Vacios";
        }
    
}


?>