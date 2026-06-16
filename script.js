const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

const lines = [
  "BOOTING KevinOS v1.0",
  "",
  "[ OK ] Loading Android Lab",
  "[ OK ] Loading Robot Engineering",
  "[ OK ] Loading Web Interface",
  "[ OK ] Loading Social Links",
  "",
  "ACCESS GRANTED",
  ""
];

let current = 0;

function typeLine() {
  if (current < lines.length) {
    bootText.textContent += lines[current] + "\n";
    current++;

    setTimeout(typeLine, 350);
  } else {
    setTimeout(() => {
      bootScreen.classList.add("boot-hide");

      setTimeout(() => {
        bootScreen.remove();
      }, 800);

    }, 1000);
  }
}

window.addEventListener("load", () => {
  typeLine();
});
