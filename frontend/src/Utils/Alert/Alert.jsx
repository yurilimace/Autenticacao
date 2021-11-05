import Swal from 'sweetalert2'

const SucessoToast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:3000,
    timerProgressBar:true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter',Swal.stopTimer)
        toast.addEventListener('mouseleave',Swal.resumeTimer)
    }

})

export const DispararAlerta = (tipo,messagem) =>{
   
    if(tipo === "sucesso"){
        SucessoToast.fire({
            icon:'success',
            iconColor:'#ffffff',
            title :"<h5 style='color:white' >" + messagem + "</h5>",
            background:"#77D970",
            
           
        })
    }
    else if(tipo === "erro"){
        SucessoToast.fire({
            icon:'error',
            iconColor:'#ffffff',
            title :"<h5 style='color:white' >" + messagem + "</h5>",
            background:"#DF2E2E"
        })
    }
}

