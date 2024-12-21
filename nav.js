const showButton = document.getElementById("showButton");
const closeButton = document.getElementById("closeButton");
const sideNav = document.getElementById("sideNav");

// Show the div when the "Show" button is clicked
showButton.addEventListener("click", () => {
  console.log("clicked");
  sideNav.style.display = "block";
});

// Hide the div when the "Close" button is clicked
closeButton.addEventListener("click", () => {
  sideNav.style.display = "none";
});
