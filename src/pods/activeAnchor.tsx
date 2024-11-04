const anchors = document.querySelectorAll(".activeAnchor");

// Recorre cada elemento y agrega un evento de clic
anchors.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    // Cambia la clase a "anchorActivated" al hacer clic
    this.classList.toggle("anchorActivated");
  });
});
