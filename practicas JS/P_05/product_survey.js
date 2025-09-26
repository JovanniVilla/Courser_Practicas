function submitFeedback(){

    // Obtener los valores de los campos del formulario
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedback = document.getElementById("feedbackText").value;
    const experience = document.getElementById("userExperience").value;

    
    // Validar que todos los campos estén completos
    if (!name || !age || !email || !job || !designation || !productType || !feedback || !experience) {
        alert("Por favor, completa todos los campos del formulario.");
    }else {
    alert('Gracias por tus comentarios, ' + name + '!');
    };

    //Mostrar la información del usuario en la página
    document.getElementById("userName").innerHTML = name;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductChoice").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedback;
    document.getElementById("userExperienceFeedback").innerHTML = experience;
    document.getElementById("userInfo").style.display = "block";


};
const submitButton = document.getElementById("submitBtn");// Captura el Botón de Envío en una variable


submitButton.onclick = submitFeedback; // Asigna la función submitFeedback al evento click del botón


// Permitir enviar el formulario al presionar la tecla "Enter" 
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });
