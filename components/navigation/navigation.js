(function() {
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
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function(e) {
    hamburger.doToggle(e);
  });
})();
