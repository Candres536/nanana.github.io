var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var activePanel = this.nextElementSibling;
    if (activePanel.style.display === "block") {
      activePanel.style.display = "none";
      this.classList.remove("active");
    } else {
      for (var j = 0; j < panel.length; j++) {
        panel[j].style.display = "none";
        acc[j].classList.remove("active");
      }
      activePanel.style.display = "block";
      this.classList.add("active");
    }
  });
}

// Activar el primer panel y botón al cargar la página
panel[0].style.display = "block";
acc[0].classList.add("active");
