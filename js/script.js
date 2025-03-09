// Obtener el modal
var modal = document.getElementById("contact-modal");

// Obtener el enlace del "Contact" para abrir el modal
var link = document.getElementById("contact-link");

// Obtener el botón de cerrar
var closeBtn = document.getElementsByClassName("close")[0];

// Cuando se hace clic en "Contact", abre el modal
link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// Cuando se hace clic en la 'x', cierra el modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
