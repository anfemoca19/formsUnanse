

document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos todos los elementos input dentro del formulario
  const inputs = document.querySelectorAll("input");

  // Agregamos un evento de escucha para cada input
  inputs.forEach(function(input) {
    input.addEventListener("keydown", function(event) {
      // Verificamos si la tecla presionada es "Tab"
      if (event.key === "Tab") {
        // Obtenemos el acordeón actual
        const currentAccordion = input.closest(".accordion-item");

        // Obtenemos el siguiente acordeón
        const nextAccordion = currentAccordion.nextElementSibling;

        // Si hay un siguiente acordeón y es un elemento de acordeón
        if (nextAccordion && nextAccordion.classList.contains("accordion-item")) {
          // Activamos el siguiente acordeón
          const collapse = nextAccordion.querySelector(".accordion-collapse");
          const accordionButton = nextAccordion.querySelector(".accordion-button");
          collapse.classList.add("show");
          accordionButton.setAttribute("aria-expanded", "true");
        }
      }
    });
  });
});


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

