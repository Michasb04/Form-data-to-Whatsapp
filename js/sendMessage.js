function sendMessage(Event){

    Event.preventDefault()

    let phoneNumber = "+573004803498"
    let name = document.querySelector(".name").value.trim();
    let email = document.querySelector(".email").value.trim();
    let messageText = document.querySelector(".message").value.trim();
             
    let URL = "https://wa.me/" + phoneNumber + "?text="
             + "Nombre: " + name + "%0a"
             + "Email: " + email + "%0a"
             + "Mensaje: " + messageText + "%0a";

    if( name === ""){
        alert("Por favor ingrese su nombre");
     }

    else if( email === ""){
        alert("Por favor ingrese su correo")
    }
    else{                 
        window.open(URL,"_blank").focus();
    }    
}