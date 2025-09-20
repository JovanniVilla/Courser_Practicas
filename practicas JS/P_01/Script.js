function getName() { 
    let nombre = document.getElementById("ID_Nombre").value;
    if (nombre.length === 0){
        nombre = "Extraño";
    } else
    document.getElementById("ID_persona").textContent = nombre;
    document.getElementById("ID_Nombre").value = "";
    //console.log(nombre);

    
}
function Saludar() {
    let hora = new Date().getHours();
    console.log(hora);
    if (hora < 12){
    document.getElementById("ID_Saludo").textContent = "Buenos Dias";
    } 
    else if (hora < 19 ){
        document.getElementById("ID_Saludo").textContent = "Buenas Tardes";
    }
    else{
        
        document.getElementById("ID_Saludo").textContent = `Buenas Noches porque son las ${hora} horas.`;
    }
    
}

function runApps(){
    Saludar();
    getName();
}