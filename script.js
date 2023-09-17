const greetings = [
  { text: " an Engeneer. ", color: "blue" },
  { text: " a Web Developer. ", color: "red" },
  { text: " an UI / UX Designer. ", color: "blue" },
  { text: " a Freelancer. ", color: "red" },
];
const greetingElement = document.getElementById("greeting");
let currentGreetingIndex = 0;
let currentText = "";
let currentIndex = 0;
let typingInterval;
function updateGreeting() {
  const { text, color } = greetings[currentGreetingIndex];
  currentText = text;
  currentIndex = 0;
  clearInterval(typingInterval);
  greetingElement.style.color = color;
  greetingElement.textContent = "";
  typingInterval = setInterval(function () {
    if (currentIndex < currentText.length) {
      greetingElement.textContent += currentText.charAt(currentIndex);
      currentIndex++;
    } else {
      clearInterval(typingInterval);
      setTimeout(function () {
        eraseText();
      }, 2000);
    }
  }, 100);
}
function eraseText() {
  typingInterval = setInterval(function () {
    if (greetingElement.textContent.length > 0) {
      greetingElement.textContent = greetingElement.textContent.slice(0, -1);
    } else {
      clearInterval(typingInterval);
      currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
      updateGreeting();
    }
  }, 100);
}
updateGreeting();

// =================================================================================================

const imageIds = ["image1", "image2", "image3", "image4"];
let zoom_index = 0;
function zoomInAndOut() {
  const currentImageId = imageIds[zoom_index];
  const currentImage = document.getElementById(currentImageId);
  currentImage.style.transform = "scale(1.2)";
  setTimeout(() => {
    currentImage.style.transform = "scale(1)";
    zoom_index = (zoom_index + 1) % imageIds.length;
    setTimeout(zoomInAndOut, 1000);
  }, 1000);
}
zoomInAndOut();

// =================================================================================================
function open_link(link_name) {
  let URL = "https://" + link_name + ".com/";
  console.log(link_name);

  window.open(URL, "_blank");
}
