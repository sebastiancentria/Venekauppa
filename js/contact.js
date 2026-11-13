// Valitsee tiedustelulomakkeen alasvetovalikosta veneen,
// jonka esittelysivulta käyttäjä saapui (esim. contact.html?boat=saaristo-650).
(function () {
  var select = document.getElementById("boat");
  if (!select) {
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var boat = params.get("boat");
  if (!boat) {
    return;
  }

  // Valitaan vain, jos arvo löytyy valikosta
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value === boat) {
      select.selectedIndex = i;
      break;
    }
  }
})();
