var loader_visible = true;

//on btn click
function fade() {
  let background = document.getElementById("background-loader");
  let pin = document.getElementById("pin-loader");
  let pulse = document.getElementById("pulse-loader");
  if (loader_visible == true) {
    background.style.animation = "fade-out 1s forwards";
    pin.style.animation = "invert-bounce 1s forwards";
    pulse.style.animation = "fade-out 1s forwards";
  }
  else{
    background.style.animation = "fade-in 1s forwards";
    pin.style.animation = "bounce 1s forwards";
    pulse.style.animation = "fade-in 1s ease-out";
  }
	loader_visible = !loader_visible; 
}

// Event listener
let html = document.querySelector("html");
html.addEventListener("click", fade);