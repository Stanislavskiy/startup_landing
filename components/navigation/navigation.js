$(document).ready(function() {
  var hamburger = {
    navToggle: document.querySelector(".navigation__toggle"),
    nav: document.querySelector(".navigation__menu"),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle("navigation__expanded");
      this.nav.classList.toggle("navigation__expanded");
    }
  };

  hamburger.navToggle.addEventListener("click", function(e) {
    setTimeout(function() {
      hamburger.doToggle(e);
    }, 0);
  });

  hamburger.nav.addEventListener("click", function(e) {
    setTimeout(function() {
      hamburger.doToggle(e);
    }, 0);
  });

  $(".navigation__menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
