let count = 0;

function  increseCount(){
    count = count + 1; //incrementa los seguidores en 1
    displayCount(); //muestra el conteo actualizado
    checkCountValue(); //verifica si se alcanzó un hito
};
function  displayCount(){
     document.getElementById("countDisplay").innerText = count;
};

function checkCountValue(){
    if (count === 10){
        alert("Alcanzaste 10 seguidores!");
    }else if (count === 20){
        alert("Alcanzaste 20 seguidores!");
    }else if (count === 30){
        alert("Alcanzaste 30 seguidores!");
    }else if (count === 50){
        alert("Alcanzaste 50 seguidores!");
    }else if (count === 100){
        alert("Alcanzaste 100 seguidores!");
    }else if (count === 1000){
        alert("Alcanzaste 1000 seguidores!");
    };
};

function resetCount(){
    count = 0;
    displayCount();
    alert("El conteo de seguidores ha sido reiniciado.");
};