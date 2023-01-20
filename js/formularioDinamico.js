// Configuracion del formulario dinamico de "NuevaSolicitudes"
const $slot1 = document.querySelector('.slot1');
const $slot2 = document.querySelector('.slot2');
const $slot3 = document.querySelector('.slot3');
const $slot4 = document.querySelector('.slot4');
const $slot5 = document.querySelector('.slot5');
const $slot6 = document.querySelector('.slot6');

function Part1(){
    var $contacto = document.getElementById('NombreContacto').value;
    var $programa = document.getElementById('ProgramaInput').value;
    var $area = document.getElementById('AreasInput').value;

    if($contacto==''){
        let inputContacto = document.querySelector('#NombreContacto');
        inputContacto.classList.add("formWarning");

        let msjAdvertencia = document.getElementById('AdvContacto');
        msjAdvertencia.style.setProperty("display","block")
        msjAdvertencia.innerHTML = "*Campo Vacio";
    }else{
        document.getElementById('NombreContacto').classList.remove("formWarning");

        let expLetras = /^[A-Z]+$/i;
        let verficarContacto = expLetras.test($contacto);
        if(!verficarContacto){
            let msjAdvertencia = document.getElementById('AdvContacto');
            msjAdvertencia.style.setProperty("display","block")
            msjAdvertencia.innerHTML = "*Este campo solo acepta letras";
        }else{
            if($programa=='0'){
                let AdvAnterior =  document.getElementById('AdvContacto');
                AdvAnterior.style.setProperty("display","none");
                document.getElementById('NombreContacto').classList.remove("formWarning");

                let inputPrograma = document.querySelector('#ProgramaInput');
                inputPrograma.classList.add("formWarning");

                let msjAdvertencia = document.getElementById('AdvPrograma');
                msjAdvertencia.style.setProperty("display","block")
                msjAdvertencia.innerHTML = "*Seleccione un Programa";
                
            }else{
                if($area=='0'){
                    let AdvAnterior =  document.getElementById('AdvPrograma');
                    AdvAnterior.style.setProperty("display","none");
                    document.getElementById('ProgramaInput').classList.remove("formWarning");

                    let inputArea = document.querySelector('#AreasInput')
                    inputArea.classList.add("formWarning")
    
                    let msjAdvertencia = document.getElementById('AdvArea');
                    msjAdvertencia.style.setProperty("display","block")
                    msjAdvertencia.innerHTML = "*Seleccione un Area";

                }else{
                    let AdvAnterior =  document.getElementById('AdvArea');
                    AdvAnterior.style.setProperty("display","none");
                    document.getElementById('ProgramaInput').classList.remove("formWarning")

                    $slot1.style.setProperty("display","none");
                    $slot2.style.setProperty("display","block")
                }
            }
        }
    }
    
    
    
}

function Part2(){
    var $arte = document.getElementById('ArtesInput').value;

    if($arte=='0'){
        let inputArea = document.querySelector('#ArtesInput');
        inputArea.classList.add("formWarning");

        let msjAdvertencia = document.getElementById('AdvArtes');
        msjAdvertencia.style.setProperty("display","block")
        msjAdvertencia.innerHTML = "*Seleccione un Arte";

    }else{
        let AdvAnterior =  document.getElementById('AdvArtes');
        AdvAnterior.style.setProperty("display","none");
        document.getElementById('ProgramaInput').classList.remove("formWarning");

        if($arte=="2"){
            $slot2.style.setProperty("display","none");
            $slot5.style.setProperty("display","block");
        }else{
            $slot2.style.setProperty("display","none");
            $slot3.style.setProperty("display","block");
        }
    }
}

function Part3(){
    var $fechaProduccion = document.getElementById('FechaProduccion').value;
    var $horarioProduccion = document.getElementById('HorarioProduccion').value;

    if($fechaProduccion==''){
        let InputFechaProduccion = document.querySelector("#FechaProduccion");
        InputFechaProduccion.classList.add("formWarning")

        let msjAdvertencia = document.getElementById('AdvFechaP');
        msjAdvertencia.style.setProperty("display","block");
        msjAdvertencia.innerHTML = "*Seleccione una Fecha"
    }else{
        let AdvAnterior =  document.getElementById('AdvFechaP');
        AdvAnterior.style.setProperty("display","none");
        document.getElementById('FechaProduccion').classList.remove("formWarning");

        if($horarioProduccion=='0'){
            let inputHorarioProduccion = document.querySelector('#HorarioProduccion');
            inputHorarioProduccion.classList.add("formWarning");

            let msjAdvertencia = document.getElementById('AdvHorarioP');
            msjAdvertencia.style.setProperty("display","block");
            msjAdvertencia.innerHTML = "*Seleccione un Horario"
        }else{
            let AdvAnterior =  document.getElementById('AdvHorarioP');
            AdvAnterior.style.setProperty("display","none");
            document.getElementById('HorarioProduccion').classList.remove("formWarning");

            $slot3.style.setProperty("display","none");
            $slot4.style.setProperty("display","block");
        }
    }

}

function Part5(){
    var $tProduccion = document.getElementById('TipoProduccion').value;
    var $fechaProduccion = document.getElementById('FechaProduccionP').value;
    var $horarioProduccion = document.getElementById('HorarioProduccionP').value;

    if($tProduccion==''){
        let InputTipoProduccion = document.querySelector("#TipoProduccion");
        InputTipoProduccion.classList.add("formWarning");

        let msjAdvertencia = document.getElementById('AdvTipoP');
        msjAdvertencia.style.setProperty("display","block");
        msjAdvertencia.innerHTML = "*Seleccion un tipo de produccion"
    }else{
        if($fechaProduccion==''){
            let AdvAnterior =  document.getElementById('AdvTipoP');
            AdvAnterior.style.setProperty("display","none");
            document.getElementById('TipoProduccion').classList.remove("formWarning");

            let InputFechaProduccion = document.querySelector("#FechaProduccionP");
            InputFechaProduccion.classList.add("formWarning")
    
            let msjAdvertencia = document.getElementById('AdvFechaPP');
            msjAdvertencia.style.setProperty("display","block");
            msjAdvertencia.innerHTML = "*Seleccione una Fecha"
        }else{
            let AdvAnterior =  document.getElementById('AdvFechaPP');
            AdvAnterior.style.setProperty("display","none");
            document.getElementById('FechaProduccionP').classList.remove("formWarning");
    
            if($horarioProduccion=='0'){
                let inputHorarioProduccion = document.querySelector('#HorarioProduccionP');
                inputHorarioProduccion.classList.add("formWarning");
    
                let msjAdvertencia = document.getElementById('AdvHorarioPP');
                msjAdvertencia.style.setProperty("display","block");
                msjAdvertencia.innerHTML = "*Seleccione un Horario"
            }else{
                let AdvAnterior =  document.getElementById('AdvHorarioPP');
                AdvAnterior.style.setProperty("display","none");
                document.getElementById('HorarioProduccionP').classList.remove("formWarning");
    
                $slot5.style.setProperty("display","none");
                $slot4.style.setProperty("display","block");
            }
        }
    }

    

}

function Part4() {
    var $textProposito = document.getElementById('textProposito').value;
    var $fechaEntrega = document.getElementById('fechaEntrega').value;
    var $ImgReferencia = document.getAnimations('ImgReferencia').value;

    if($textProposito==''){
        let InputTextProposito = document.querySelector("#textProposito");
        InputTextProposito.classList.add("formWarning");

        let msjAdvertencia = document.getElementById('AdvTxtProsposito');
        msjAdvertencia.style.setProperty("display","block");
        msjAdvertencia.innerHTML = "*Por favor extienda el motivo de la solicitud";
    }else{
        if($fechaEntrega==''){
            let AdvAnterior =  document.getElementById('AdvTxtProsposito');
            AdvAnterior.style.setProperty("display","none");
            document.getElementById('textProposito').classList.remove("formWarning");

            let InputFechaEntrega = document.querySelector("#fechaEntrega");
            InputFechaEntrega.classList.add("formWarning")
    
            let msjAdvertencia = document.getElementById('AdvfechaEntregaFF');
            msjAdvertencia.style.setProperty("display","block");
            msjAdvertencia.innerHTML = "*Seleccione una Fecha de Entrega"
        }else{
            if($ImgReferencia==''){
                let AdvAnterior =  document.getElementById('AdvfechaEntregaFF');
                AdvAnterior.style.setProperty("display","none");
                document.getElementById('fechaEntrega').classList.remove("formWarning");
    
                let InputFechaEntrega = document.querySelector("#ImgReferencia");
                InputFechaEntrega.classList.add("formWarning")
        
                let msjAdvertencia = document.getElementById('AdvImgReferencia');
                msjAdvertencia.style.setProperty("display","block");
                msjAdvertencia.innerHTML = "*Porfavor suba una imagen de muestra"
            }else{
                let AdvAnterior =  document.getElementById('AdvImgReferencia');
                AdvAnterior.style.setProperty("display","none");
                document.getElementById('ImgReferencia').classList.remove("formWarning");
    
                $slot4.style.setProperty("display","none");
                $slot6.style.setProperty("display","block");

            }
        }
    }
}