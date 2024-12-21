const greetings = [
    { text: " an Engineer. ", color: "#84e4f9" },
    { text: " a Web Developer. ", color: "#8d3bf6" },
    { text: " an Open Source Contributor. ", color: "#84e4f9" },
    { text: " a Freelancer. ", color: "#8d3bf6" },
    { text: " an UI / UX Designer. ", color: "#84e4f9" },
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
  
  const imageIds = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8",
    "image9",
    "image10",
    "image11",
  ];
  let zoom_index = 0;
  function zoomInAndOut() {
    const currentImageId = imageIds[zoom_index];
    const currentImage = document.getElementById(currentImageId);
    currentImage.style.transform = "scale(1.25)";
    setTimeout(() => {
      currentImage.style.transform = "scale(1)";
      zoom_index = (zoom_index + 1) % imageIds.length;
      setTimeout(zoomInAndOut, 1000);
    }, 1000);
  }
  zoomInAndOut();