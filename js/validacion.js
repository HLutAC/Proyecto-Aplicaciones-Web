const nombre=document.getElementById("name");
const email=document.getElementById("email");
const reemail=document.getElementById("reemail")
const telf=document.getElementById("tel");
const form = document.getElementById("form");
const mensaje = document.getElementById("mensaje");
/*____________________________________*/
const e_nombre=document.getElementById("errornombre");
const e_telefono = document.getElementById("errortelefono");
const e_correo = document.getElementById("errorcorreo");
const e_recorreo = document.getElementById("errecorreo");
/*____________________________________*/
function actualizar(){location.reload(true);}
/*Exigencia de los campos */
nombre.addEventListener("keyup",g =>{
    if(nombre.value==""){
        e_nombre.innerHTML ='No ingreso un nombre'
    }else{
        e_nombre.innerHTML =''
    }
})
telf.addEventListener("keyup", h =>{
    if(telf.value==""){
        e_telefono.innerHTML ='No ingreso un telefono'
    }else{
        if(telf.value.length!=9){
            e_telefono.innerHTML ='Ingrese un telefono valido'
        }else{
            e_telefono.innerHTML =''
        }
    }
})
email.addEventListener("keyup", k=>{
    if(email.value==""){
        e_correo.innerHTML ='No ingreso un correo'
    }else{
        e_correo.innerHTML =''
    }
})
reemail.addEventListener("keyup", k=>{
    if(reemail.value==""){
        e_recorreo.innerHTML ='No ingreso un correo'
    }else{
        if(reemail.value!=email.value){
            e_recorreo.innerHTML='Ingrese el mismo correo'
        }else{
        e_recorreo.innerHTML =''
        }
    }
})
/*_____________________________ */
form.addEventListener("submit", e=> {
    let confimacion =0;  
    e.preventDefault()
    let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if(nombre.value!=""){
        confimacion+=1;
    }
    if(telf.value!=""){
        confimacion+=1;
    }
    if(email.value!=""){
        if (regexEmail.test(email.value)){
            confimacion+=1;
        }
    }
    if(reemail.value!=""){
        if(reemail.value==email.value){
            confimacion+=1;
        }
    }
    if(confimacion==4){
        mensaje.style.background = 'green';
        mensaje.innerHTML = 'REGISTRO ENVIADO';
        setTimeout(actualizar,5000)
    }else{
        mensaje.style.background = 'red';
        mensaje.innerHTML = 'INVALIDO';
    }
    console.log(confimacion)
})

 
