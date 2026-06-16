const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

const bootLines = [
  "BOOTING KevinOS v1.0",
  "",
  "[ OK ] Loading Android Lab",
  "[ OK ] Loading Robot Engineering",
  "[ OK ] Loading Web Interface",
  "[ OK ] Loading Social Links",
  "",
  "ACCESS GRANTED"
];

let current = 0;

function typeBoot() {
  if (!bootScreen || !bootText) return;

  if (current < bootLines.length) {
    bootText.textContent += bootLines[current] + "\n";
    current++;
    setTimeout(typeBoot, 350);
  } else {
    setTimeout(() => {
      bootScreen.classList.add("boot-hide");
      setTimeout(() => bootScreen.remove(), 800);
    }, 1000);
  }
}

window.addEventListener("load", typeBoot);

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
const runBtn = document.getElementById("terminal-run");

const commands = {
  help: [
    "Available commands:",
    "help     - show command list",
    "about    - about Kevin",
    "skills   - show skill stack",
    "projects - show personal projects",
    "social   - show social links",
    "experience - show experience",
    "clear    - clear terminal"
  ],
  about: [
    "Kevin / Trần Bá Kevin",
    "Android Researcher • Emulator Engineer • Robot Developer",
    "Personal terminal-style portfolio."
  ],
  skills: [
    "ADB / Android / Emulator",
    "Robot Engineering",
    "Web Interface",
    "HTTP / TLS / Proxy Research"
  ],
  projects: [
    "01 Android & Emulator Research",
    "02 Robot Engineering",
    "03 Personal Web Lab"
  ],
  experience: [
  "Android Emulator Research",
  "- BlueStacks",
  "- LDPlayer",
  "- Android-x86",
  "",
  "Robot Engineering",
  "- Arduino",
  "- Servo Control",
  "- Sensor Integration",
  "",
  "English Teaching",
  "- Teaching Grade 7 & 10",
  "- Lesson Design",
  "- Classroom Activities",
  "",
  "Portfolio Website",
  "- HTML",
  "- CSS",
  "- JavaScript",
  "- GitHub Pages"
],
  social: [
    "Facebook: https://www.facebook.com/tranbakevin",
    "Instagram: https://www.instagram.com/vangogheyess/",
    "Zalo: https://zalo.me/0933172804",
    "Discord: https://discord.com/invite/EyHmRQPygq",
    "Email: tranafbaskevin@gmail.com"
  ]
};

function printLine(text, className = "") {
  const p = document.createElement("p");
  p.textContent = text;
  if (className) p.className = className;
  output.appendChild(p);
}

if (input && output) {
  input.addEventListener("keyup", function (e) {
    if (e.key !== "Enter" &&
    e.key !== "Go" &&
    e.key !== "Done") return;

    const cmd = input.value.trim().toLowerCase();
    input.value = "";

    printLine("$ " + cmd, "command");

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    if (commands[cmd]) {
      commands[cmd].forEach(line => printLine(line, "ok"));
    } else {
      printLine("Command not found: " + cmd, "error");
      printLine("Type 'help' to see available commands.");
    }
  });
  if (runBtn) runBtn.addEventListener("click", function () {
    const cmd = input.value.trim().toLowerCase();
    input.value = "";

    printLine("$ " + cmd, "command");

    if (cmd === "clear") {
        output.innerHTML = "";
        return;
    }

    if (commands[cmd]) {
        commands[cmd].forEach(line => printLine(line, "ok"));
    } else {
        printLine("Command not found: " + cmd, "error");
        printLine("Type 'help' to see available commands.");
    }
});
}
