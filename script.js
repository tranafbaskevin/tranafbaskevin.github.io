const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const bootLines = [
  "> boot KevinOS",
  "> loading developer modules...",
  "[OK] Android Lab",
  "[OK] Robot Engineering",
  "[OK] Web Interface",
  "[OK] Social Links",
  "[READY] System online"
];

const bootBox = document.querySelector(".boot-log");

if (bootBox) {
  bootBox.innerHTML = "";

  bootLines.forEach((line, index) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = line;

      if (line.includes("[OK]") || line.includes("[READY]")) {
        p.classList.add("ok");
      }

      bootBox.appendChild(p);
    }, index * 550);
  });
}
