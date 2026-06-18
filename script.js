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
    "music   - open music playlist",
    "stats - website statistics",
    "about    - about Kevin",
    "skills   - show skill stack",
    "projects - show personal projects",
    "social   - show social links",
    "experience - show experience",
    "whoami - show profile",
    "contact - contact information",
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
  "",
  "[ANDROID EMULATOR RESEARCH]",
  " ├─ BlueStacks",
  " ├─ LDPlayer",
  " └─ Android-x86",

  "",

  "[ROBOT ENGINEERING]",
  " ├─ Arduino",
  " ├─ Servo Control",
  " └─ Sensor Integration",

  "",

  "[ENGLISH TEACHING]",
  " ├─ Teaching Grade 7 & 10",
  " ├─ Lesson Design",
  " └─ Classroom Activities",

  "",

  "[PORTFOLIO WEBSITE]",
  " ├─ HTML",
  " ├─ CSS",
  " ├─ JavaScript",
  " └─ GitHub Pages"
],
  whoami: [
  "Kevin / Trần Bá Kevin",
  "",
  "Android Researcher",
  "Robot Developer",
  "English Tutor",
  "Web Developer"
],
  stats: [
  "Website Version : 1.0",
  "Projects         : 3",
  "Experience Areas : 4",
  "Terminal Commands: 9",
  "Status           : ONLINE"
],
  contact: [
  "Email:",
  "tranafbaskevin@gmail.com",
  "",
  "Facebook:",
  "facebook.com/tranbakevin",
  "",
  "Instagram:",
  "instagram.com/vangogheyess",
  "",
  "Discord:",
  "EyHmRQPygq"
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

    if (cmd === "music") {
    printLine("Opening Kevin Playlist...", "ok");

    window.open(
        "https://www.youtube.com/@tranafbaskevjn/playlists",
        "_blank"
    );

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

    if (cmd === "music") {
        printLine("Opening Kevin Playlist...", "ok");

        window.open(
            "https://www.youtube.com/@tranafbaskevjn/playlists",
            "_blank"
        );

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

const clock = document.getElementById("clock");

function updateClock() {
    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("vi-VN", {
        hour12: false
    });
}

updateClock();
setInterval(updateClock, 1000);
const lofiBtn = document.getElementById("lofi-toggle");

if (lofiBtn) {
  lofiBtn.addEventListener("click", function () {
    lofiBtn.textContent = "Ⅱ opening cyberpunk radio, welcome to our cyberworld...";

const nowPlaying = document.querySelector(".now-playing");

if (nowPlaying) {
  nowPlaying.innerHTML = `
    <p>$ nowplaying<span class="cursor">_</span></p>
    <p>source: YouTube</p>
    <p>track : In Your Arms</p>
    <p>artist: Mr.Kitty</p>
    <p>status: external tab opened</p>
  `;
}

window.open("https://youtu.be/d1SktoLw0hI?si=ChTNyloSd7C-fLE7", "_blank");
  });
}
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeToggle.textContent = "☾ dark";
      localStorage.setItem("theme", "light");
    } else {
      themeToggle.textContent = "☀ light";
      localStorage.setItem("theme", "dark");
    }
    
    updatePanelImage();
  });

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☾ dark";
  }

}
const panelImg = document.getElementById("panel-img");

function switchPanelImage(src) {
  if (!panelImg || panelImg.src.includes(src)) return;

  panelImg.classList.add("fade-out");

  setTimeout(() => {
    panelImg.src = src;
    panelImg.classList.remove("fade-out");
  }, 500);
}

function updatePanelImage() {
  if (document.body.classList.contains("light-theme")) {
    switchPanelImage("assets/arlecchino-eyes-panel.jpeg");
  } else {
    switchPanelImage("assets/panel.jpg");
  }
}

updatePanelImage();
const typingText = document.getElementById("typing");

const roles = [
  "Android Researcher",
  "Emulator Engineer",
  "Robot Developer",
  "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 45 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeRole, speed);
}

typeRole();
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("load", function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});
const uptimeEl = document.getElementById("uptime");
const startTime = Date.now();

function updateUptime(){
  if (!uptimeEl) return;

  const diff = Date.now() - startTime;
  const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

  uptimeEl.textContent = `${hours}:${minutes}:${seconds}`;
}

updateUptime();
setInterval(updateUptime, 1000);
const projectReports = {
  portfolio: `PROJECT REPORT
────────────────────
Name: Terminal Portfolio Website
Status: DEPLOYED

Tech:
✓ HTML
✓ CSS
✓ JavaScript
✓ GitHub Pages

Features:
✓ Terminal interface
✓ Boot animation
✓ Real-time clock
✓ Visitor counter
✓ Development log
✓ Achievements
✓ Projects & Labs`,

  android: `PROJECT REPORT
────────────────────
Name: Android Testing Lab
Status: ACTIVE

Tools:
✓ BlueStacks
✓ ADB
✓ HTTP Toolkit
✓ Surfboard
✓ Stash

Experiments:
✓ Emulator setup
✓ Network proxy testing
✓ Certificate testing
✓ App behavior analysis`,

  discord: `PROJECT REPORT
────────────────────
Name: New Smile Sai Gon
Status: DESIGN

Type:
Cyberpunk Discord community

Completed:
✓ Server concept
✓ Rules
✓ Verification flow
✓ Welcome messages
✓ Visual direction`,

  english: `PROJECT REPORT
────────────────────
Name: English Tutor System
Status: TEACHING

Goal:
Help beginner students rebuild English foundation.

Topics:
✓ Alphabet
✓ Numbers
✓ Colors
✓ Days of week

Work:
✓ Lesson plans
✓ Mini games
✓ Flashcards
✓ Beginner practice`
};

const projectButtons = document.querySelectorAll(".project-btn");
const projectModal = document.getElementById("project-modal");
const projectReport = document.getElementById("project-report");
const projectClose = document.getElementById("project-close");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectKey = button.dataset.project;
    projectReport.textContent = projectReports[projectKey];
    projectModal.classList.add("show");
  });
});

projectClose.addEventListener("click", () => {
  projectModal.classList.remove("show");
});

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    projectModal.classList.remove("show");
  }
});
