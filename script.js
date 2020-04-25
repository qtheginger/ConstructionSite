function myFunction() {
    var x = document.getElementById("top-nav-wrap");
    if (x.className === "nav-wrap") {
      x.className += " responsive";
    } else {
      x.className = "nav-wrap";
    }
  }