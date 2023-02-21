function myFunction() {
  var dots = document.getElementById("dots");
  var meretext = document.getElementById("mere");
  var tekstknap = document.getElementById("læsmereknap");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    tekstknap.innerHTML = "Læs mere";
    meretext.style.display = "none";
  } else {
    dots.style.display = "none";
    tekstknap.innerHTML = "Læs mindre";
    meretext.style.display = "inline";
  }
}
