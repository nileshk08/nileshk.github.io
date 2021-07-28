function readmore1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("readmore1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function readmore2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("readmore2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}