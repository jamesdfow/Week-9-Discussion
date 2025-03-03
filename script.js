const jsButton = document.getElementById("jsButton");

jsButton.addEventListener("click", function () {
  const displayParagraph = document.querySelector(".jsDisplay p");
  displayParagraph.textContent =
    "This is one of the ways Javascript can add interactivity!";
});
