const scriptURl = "https://script.google.com/macros/s/AKfycbyRSt6WC39gV5gMoAtUq7LiXPeiETGIZ5OkPq0sgGokCw9-eRVVH_MMAU0o3Oaj-dMO/exec";

const form = document.forms['form-cotizacion'];
const loader = document.getElementById('loader');
const submitButton = document.getElementById('submitButton');

form.addEventListener("submit", e => {

  e.preventDefault();
  debugger
    // Mostrar loader
    loader.style.display = 'block';
    submitButton.disabled = true; // Deshabilitar el botón de enviar

  // Obtener la fecha actual
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
 
  // Agregar la fecha al formulario

  const formData = new FormData(form);
  const file = matricula.files[0];
  formData.append('file', file);
  // const file =  formData.get('archivo_matricula');
  console.log(formData.getAll("archivo_matricula"))

  formData.append('hora_fecha_registro', formattedDate);


  setTimeout(() => {
    // Enviar formulario
    
    fetch(scriptURl, { method: 'POST', body: formData })
      .then(response => {
        loader.style.display = 'none';
        submitButton.disabled = false;
        swal("Gracias, La información se envió de manera exitosa","","success");
        // window.location.reload();
      })
      .catch(error => {
        console.log("Error!", error);
        loader.style.display = 'none';
        submitButton.disabled = false;
      });

  }, 1000); 

});




// COlap section
document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function(input) {
    input.addEventListener("keydown", function(event) {
      if (event.key === "Tab") {
        const currentAccordion = input.closest(".accordion-item");

        const nextAccordion = currentAccordion.nextElementSibling;

        if (nextAccordion && nextAccordion.classList.contains("accordion-item")) {
          const collapse = nextAccordion.querySelector(".accordion-collapse");
          const accordionButton = nextAccordion.querySelector(".accordion-button");
          collapse.classList.add("show");
          accordionButton.setAttribute("aria-expanded", "true");
        }
      }
    });
  });
});

// Menu
function irAQuienesSomos() {
  window.location.href = 'https://www.unanse.co/#comp-kcm336ja';
}
function irANuestosServicios() {
  window.location.href = 'https://www.unanse.co/#bgLayers_comp-kcm5en0l';
}
function irANuestroAliados() {
  window.location.href = 'https://www.unanse.co/#comp-kcm6pq5c';
}
function irAContactaenos() {
  window.location.href = 'https://www.unanse.co/#bgLayers_comp-kd91z656';
}




const fechaNacimientoInput = document.getElementById('fecha_nacimiento');

fechaNacimientoInput.addEventListener("blur", function() {
  // Obtener la fecha actual
  const currentDate = new Date();
  
  // Obtener la fecha de nacimiento ingresada por el usuario
  const fechaNacimiento = new Date(fechaNacimientoInput.value);
  
  // Calcular la edad del usuario
  let edad = currentDate.getFullYear() - fechaNacimiento.getFullYear();
  const mesActual = currentDate.getMonth() + 1;
  const mesNacimiento = fechaNacimiento.getMonth() + 1;

  // Verificar si el usuario ya cumplió años en este año
  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && currentDate.getDate() < fechaNacimiento)) {
    edad--;
}

  // Validar que la edad sea mayor o igual a 18 años
  if (edad < 18) {
    // Mostrar mensaje de error
    swal("Debes ser mayor de edad para continuar","","warning");
    fechaNacimientoInput.focus(); // Devolver el foco al campo de fecha de nacimiento
    fechaNacimientoInput.value = ''; // Limpiar el campo de fecha de nacimiento
  }
});

