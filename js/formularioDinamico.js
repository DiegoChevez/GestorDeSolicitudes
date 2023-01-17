// Configuracion del formulario dinamico de "NuevaSolicitudes"
const $slot1 = document.querySelector('.slot1');
const $slot2 = document.querySelector('.slot2');
const $slot3A = document.querySelector('.slot3A');
const $slot3B = document.querySelector('.slot3B');
const $slot4 = document.querySelector('.slot4');

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

        $slot2.style.setProperty("display","none");
        $slot3A.style.setProperty("display","block");

        
    }
}