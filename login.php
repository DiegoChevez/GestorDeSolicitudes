<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistemas</title>
    <link rel="shortcut icon" href="ArchivosETC/funda.ico" type="image/x-icon">
    <!-- Estilos / Diseño -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"> <!-- Estilos / BOOTSTRAP -->
    <link rel="stylesheet" href="css/styles.css"> <!-- Estilos / Generales -->

    <script src="https://kit.fontawesome.com/0fc218370a.js" crossorigin="anonymous"></script> <!-- FontAwesome / Icons -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- SweetAlert / Alerts -->
</head>

<body id="Index-login" class="contenedor">

    <header>
    </header>

    <section>

        <form action="php/loginConfig.php" method="post">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail"
                        placeholder="Nombre.Apellido" name="usuario">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="****" name="contrasena">
                </div>
            </div>
            <input name="btnIngresar" type="submit" value="Login" class="btn btn-primary">
        </form>

    </section>


    <footer>
    </footer>




    <!-- Configuraciones / JavaScript -->
    <script src="Bootstrap/js/bootstrap.min.js"></script>
    <script src="js/config.js"></script>


    <!-- Configuraciones PHP -->
    <?php
    
    $error = $_GET['error'];

    switch ($error) {
        case 'UsuarioInexistente':
    ?>
            <script>
            Swal.fire({icon: 'error',title: 'Ha ocurrido algo!',text: 'Usuario o contraseña Invalida',text: 'Revise sus credenciales'})
            </script>
    <?php 
        break;

        case 'CamposVacios':
    ?>
            <script>
            Swal.fire({icon: 'error',title: 'Existen Campos Vacios',text: 'Porfavor revisar los campos'})
            </script>
    <?php
        break;
        default:
        ?>
        <script>
            Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
            })
        </script>
        <?php
        break;
        }
    ?>

</body>

</html>