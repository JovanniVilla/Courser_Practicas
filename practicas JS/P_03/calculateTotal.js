function calcularTotal(){


    //Captura de los datos
    let producto01 = parseFloat(document.getElementById("item01").value);
    let producto02 = parseFloat(document.getElementById("grocery2").value);
    let producto03 = parseFloat(document.getElementById("grocery3").value);

    //Proceso de Suma
    let total = producto01 + producto02 + producto03;

    //Salida e inyeccion de informacion
    document.getElementById("resultado").innerHTML =`El total de la cuenta es de: $ ${total}`;

}