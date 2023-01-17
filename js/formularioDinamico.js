// Configuracion del formulario dinamico de "NuevaSolicitudes"
const $slot1 = document.querySelector('.slot1');
const $slot2 = document.querySelector('.slot2');
const $slot3 = document.querySelector('.slot3');
const $slot4 = document.querySelector('.slot4');
const $slot5 = document.querySelector('.slot5');

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
    var $fProduccion = document.getElementById('FechaProduccion').value;
    var $hProduccion = document.getElementById('HorarioProduccion').value;

    if($fProduccion==''){
        let inputFproduccion = document.querySelector('#FechaProduccion').value;
        inputFproduccion.classList.add("formWarning");

        let msjAdvertencia = document.getElementById('AdvFechaP');
        msjAdvertencia,style.setProperty("display","block");
        msjAdvertencia.innerHTML = "*Seleccione una Fecha"
    }else{
        if($hProduccion=='0'){
            let inputHproduccion = document.querySelector('#HorarioProduccion').value;
            inputHproduccion.classList.add("formWarning");

            let msjAdvertencia = document.getElementById('AdvHorarioP');
            msjAdvertencia,style.setProperty("display","block");
            msjAdvertencia.innerHTML = "*Seleccione un Horario"
        }else{
            $slot3.style.setProperty("display","none");
            $slot4.style.setProperty("display","block");
        }
    }

}

function Part5(){
    var $fProduccion = document.getElementById('FechaProduccion').value;
    var $hProduccion = document.getElementById('HorarioProduccion').value;
    var $tProduccion = document.getElementById('TipoProduccion').value;

    if($fProduccion==''){
        let inputFproduccion = document.querySelector('#FechaProduccion').value;
        inputFproduccion.classList.add("formWarning");

        let msjAdvertencia = document.getElementById('AdvFechaP');
        msjAdvertencia,style.setProperty("display","block");
        msjAdvertencia.innerHTML = "*Seleccione una Fecha"
    }

}