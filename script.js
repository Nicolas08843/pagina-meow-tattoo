$(document).ready(function () {
  // Smooth scrolling
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  // Formulario de opinión
  $("#opinion-form").submit(function (event) {
    event.preventDefault();
    $("#notification").text("Gracias por opinar").fadeIn().delay(2000).fadeOut();
  });

  // Formulario de contacto
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    $("#contact-notification").text("Gracias por tu mensaje").fadeIn().delay(2000).fadeOut();
  });

  // Formulario de sugerencias
  $(".suggestions-box button").click(function () {
    $("#suggestion-notification").text("Gracias por apoyarnos").fadeIn().delay(2000).fadeOut();
  });
});
