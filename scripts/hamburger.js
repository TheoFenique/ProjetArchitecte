(function() {
  var hamburger = {
    menuToggle: document.querySelector('.menuToggle'),
    nav: document.querySelector('.menu'),

    doToggle: function(e) {
      e.preventDefault();
      this.menuToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.menuToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
