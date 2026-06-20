const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// KevinOS First Boot Time
let firstBootTime = localStorage.getItem("firstBootTime");

if (!firstBootTime) {
  firstBootTime = Date.now();
  localStorage.setItem("firstBootTime", firstBootTime);
}

function getKevinOSUptime() {
  const now = Date.now();
  const diff = now - Number(firstBootTime);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
// KevinOS Command History

let commandHistory =
  JSON.parse(localStorage.getItem("commandHistory")) || [];

// KevinOS Login History

const currentLogin = new Date().toLocaleString();

const previousLogin =
  localStorage.getItem("currentLogin") || "First Login Detected";

localStorage.setItem("previousLogin", previousLogin);
localStorage.setItem("currentLogin", currentLogin);

// KevinOS Boot Counter

let bootCount = localStorage.getItem("bootCount");

if (!bootCount) {
  bootCount = 0;
}

bootCount++;

localStorage.setItem("bootCount", bootCount);

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

const systemBoot = String(bootCount).padStart(6, "0");

const bootLines = [
  "BOOTING KevinOS v2.0",
  "",
  "[ OK ] Loading Android Lab",
  "[ OK ] Loading Robot Engineering",
  "[ OK ] Loading Web Interface",
  "[ OK ] Loading Social Links",
  "[ OK ] Loading Security Scanner",
  "",
  "ACCESS GRANTED",
"",
`BOOT INSTANCE #${systemBoot}`,
"",
"INITIALIZING USER SESSION..."
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
    "history - show command history",
    "lastlogin - show login history",
    "music   - open music playlist",
    "stats - website statistics",
    "about    - about Kevin",
    "skills   - show skill stack",
    "projects - show personal projects",
    "social   - show social links",
    "experience - show experience",
    "whoami - show profile",
    "contact - contact information",
    "devlog   - show development log",
    "system   - show system information",
    "neofetch - display system banner",
    "uptime - show system uptime",
    "achievements - show unlocked badges",
    "lore - show historical badges",
    "matrix - enter hacker mode",
    "roadmap - show future plans",
    "scan - run security scan",
    "clear    - clear terminal",
    "artifacts - show preserved glitches",
    "secret - hidden command"
  ],
  about: [
    "Kevin / Trần Bá Kevin",
    "Android Researcher • Emulator Engineer • Robot Developer",
    "Personal terminal-style portfolio."
  ],
  lastlogin: [
  "=== LAST LOGIN ===",
  "",
  `Current Login:`,
  currentLogin,
  "",
  `Previous Login:`,
  previousLogin,
  "",
  `Boot Instance: #${systemBoot}`,
  "",
  "[ OK ] Login history loaded"
],
  system: [
  "=== KevinOS SYSTEM INFO ===",
  "",
  "Version: KevinOS v2.1",
  "Kernel: KVN-2.1",
  "User: visitor",
  "Status: ONLINE",
  "Terminal: READY",
  "Security Scanner: LOADED",
  "Projects Loaded: 4",
  "Commands Loaded: 15",
  "",
  "[ OK ] System integrity: 100%"
],
artifacts: [
"[ KEVINOS ARTIFACT ARCHIVE ]",
"",
"Artifact #0001",
"Legacy Render Artifact",
"",
"Status:",
"PRESERVED",
"",
"Description:",
"ASCII rendering anomaly",
"discovered during early",
"KevinOS development.",
"",
"Resolution:",
"Artifact preserved for",
"historical accuracy.",
"",
"────────────────────",
"",
"Artifact #0002",
"Theme Residue Artifact",
"",
"Status:",
"PRESERVED",
"",
"Trigger:",
"Rapid Theme Switching",
"",
"Effects:",
"• Monochrome Arlecchino",
"• Ghost Image Persistence",
"• Theme Residue Frames",
"",
"Resolution:",
"Not fixed.",
"",
"Reason:",
"Too cool to remove.",
"",
"[ OK ] Archive loaded"
],
neofetch: [
"Decrypting KevinOS kernel...",
"",
"010101010101010101010101010",
"101010101010101010101010101",
"010101010101010101010101010",
"",
"[ WARN ] Legacy render artifact detected",
"[ INFO ] Artifact preserved for historical accuracy",
"[ OK ] System information recovered",
"",
"██╗  ██╗███████╗██╗   ██╗██╗███╗   ██╗",
"██║ ██╔╝██╔════╝██║   ██║██║████╗  ██║",
"█████╔╝ █████╗  ██║   ██║██║██╔██╗ ██║",
"██╔═██╗ ██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║",
"██║  ██╗███████╗ ╚████╔╝ ██║██║ ╚████║",
"╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝",
"",
"KevinOS v2.2",
"",
"User   : visitor@kevinos",
"Kernel : KVN-2.2",
"Shell  : KevinOS Terminal",
"Theme  : Cyber Binary",
"Status : ONLINE"
],
lore: [
"[ ACHIEVEMENTS ]",
"",
"🏆 First Boot",
"Unlocked KevinOS v1.0",
"",
"🛠 Builder",
"Created custom terminal system",
"",
"🔐 Security Analyst",
"Executed first scan command",
"",
"🚀 Major Upgrade",
"Upgraded to KevinOS v2.0",
"",
"👾 Easter Egg Hunter",
"Discovered hidden command",
"",
"👑 KevinOS Creator",
"Owner of the system kernel",
"",
"🩹 Bug Hunter",
"Fixed boot sequence crash",
"",
"📡 Online Signal",
"Activated live status indicator",
"",
"⏰ Time Keeper",
"Integrated real-time clock",
"",
"📜 Historian",
"Preserved legacy render artifact",
"",
"💀 Kernel Survivor",
"Recovered from v2.0 boot freeze",
"",
"🎵 Lo-Fi Operator",
"Integrated background radio system",
"",
"🌐 Web Architect",
"Deployed portfolio to GitHub Pages",
"",
"Progress: 12/12",
"",
"[ STATUS ] ALL KNOWN ACHIEVEMENTS UNLOCKED"
],
uptime: [
  "=== KevinOS UPTIME ===",
  "",
  `System Uptime: ${getKevinOSUptime()}`,
  `Boot Instance: #${systemBoot}`,
  "",
  "[ OK ] Runtime clock synchronized"
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
  devlog: [
  "[DEVELOPMENT LOG]",
  "v1.5 Project Terminal Popup",
  "v1.4 Portfolio System Online",
  "v1.3 Character Panel Restored",
  "v1.2 Real-Time Clock Added",
  "v1.1 Terminal Commands Added",
  "v1.0 GitHub Pages Deployment"
],
roadmap: [
  "[PROJECT ROADMAP]",
  "",
  "[COMPLETED]",
  "✓ GitHub Pages",
  "✓ Terminal Interface",
  "✓ Boot Animation",
  "✓ Real-Time Clock",
  "✓ Visitor Counter",
  "✓ Project Popup V2",
  "✓ Devlog Command",
  "✓ Achievements Command",
  "",
  "[IN PROGRESS]",
  "→ Portfolio Roadmap",
  "→ Better Terminal UI",
  "",
  "[PLANNED]",
  "○ Music Player",
  "○ Contact Form",
  "○ Project Gallery",
  "○ Mobile Improvements",
  "○ Terminal Themes"
],
scan: "__SCAN__",

matrix: [
    "[MATRIX MODE]",
    "",
    "Initializing...",
    "",
    "01001010",
    "10101101",
    "00101101",
    "11001010",
    "10101010",
    "01010101",
    "11100011",
    "00011100"
],
secret: [
    "[SECURITY SYSTEM]",
    "",
    "ACCESS DENIED",
    "",
    "Nice try :)"
],
achievements: [
  "[UNLOCKED BADGES]",
  "GitHub Pages Portfolio",
  "Terminal Interface",
  "Discord Community Builder",
  "English Tutor System"
 ],
  social: [
    "Facebook: https://www.facebook.com/tranbakevin",
    "Instagram: https://www.instagram.com/vangogheyess/",
    "Zalo: https://zalo.me/0933172804",
    "Discord: https://discord.com/invite/EyHmRQPygq",
    "Email: tranafbaskevin@gmail.com"
  ],
};

function printLine(text, className = "") {
  const p = document.createElement("p");
  p.textContent = text;
  if (className) p.className = className;
  output.appendChild(p);

  scrollTerminalToBottom();
}
function scrollTerminalToBottom() {
  const terminalSection = document.querySelector("#terminal");

  if (output) {
    output.scrollTop = output.scrollHeight;
  }

  if (terminalSection) {
    terminalSection.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }
}
function typeLine(text, className = "", speed = 8) {
  const p = document.createElement("p");
  if (className) p.className = className;
  output.appendChild(p);

  let i = 0;
  const typing = setInterval(() => {
    p.textContent += text.charAt(i);
    scrollTerminalToBottom();
    i++;

    if (i >= text.length) {
      clearInterval(typing);
    }
  }, speed);
}
if (input && output) {
  input.addEventListener("keyup", function (e) {
    if (e.key !== "Enter" &&
    e.key !== "Go" &&
    e.key !== "Done") return;

    const cmd = input.value.trim().toLowerCase();
    if (cmd) {
  commandHistory.push(cmd);

  if (commandHistory.length > 20) {
    commandHistory.shift();
  }

  localStorage.setItem(
    "commandHistory",
    JSON.stringify(commandHistory)
  );
}
    input.value = "";

    typeLine("visitor@kevinos:~$ " + cmd, "command", 12);

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    if (cmd === "music") {
        const oldPopup = document.querySelector(".music-popup");
        if (oldPopup) {
          oldPopup.remove();
        }
        
  printLine("Launching Music Popup V6...", "ok");

  const popup = document.createElement("div");
  popup.className = "music-popup";
  popup.innerHTML = `
    <div class="music-popup-header">♪ KevinOS Music Popup V6</div>
    <div class="music-popup-body">
      <p>Status: ready</p>
      <p>Source: YouTube / Kevin Playlist</p>
      <p>Mode: cyberpunk radio</p>
      <button class="open-playlist-btn">Open Playlist</button>
      <button class="close-music-popup">Close</button>
    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector(".open-playlist-btn").addEventListener("click", function () {
    window.open("https://www.youtube.com/@tranafbaskevjn/playlists", "_blank");
  });

  popup.querySelector(".close-music-popup").addEventListener("click", function () {
    popup.remove();
  });

  return;
}
if (cmd === "scan") {
  const logs = [
    "[01%] Initializing system...",
    "[18%] Loading modules...",
    "[37%] Scanning Android Lab...",
    "[62%] Checking Portfolio Core...",
    "[84%] Verifying GitHub Pages...",
    "[100%] Scan Complete.",
    "",
    "STATUS: SECURE"
  ];

  let delay = 0;

  logs.forEach((line) => {
    setTimeout(() => {
      typeLine(line, "ok");
    }, delay);

    delay += 500;
  });

  return;
}
    if (
        cmd === "hack" ||
        cmd === "sudo" ||
        cmd === "access"
    ) {
        commands.secret.forEach(line =>
          printLine(line, "ok")
        );
        return;
    }
    if (cmd === "history") {

    printLine("[ COMMAND HISTORY ]", "ok");
    printLine("", "ok");

    commandHistory.forEach((item, index) => {
        printLine(
            `${String(index + 1).padStart(2, "0")}  ${item}`,
            "ok"
        );
    });

    printLine("", "ok");
    printLine(
        `Commands Executed: ${commandHistory.length}`,
        "ok"
    );

    printLine("[ OK ] History recovered", "ok");

    return;
}
    if (commands[cmd]) {
  commands[cmd].forEach((line, index) => {
    setTimeout(() => {
      typeLine(line, "ok", 8);
    }, index * 180);
  });
} else {
      printLine("Command not found: " + cmd, "error");
      printLine("Type 'help' to see available commands.");
    }
  });
  if (runBtn) runBtn.addEventListener("click", function () {
    const cmd = input.value.trim().toLowerCase();
    input.value = "";

    printLine("visitor@kevinos:~$ " + cmd, "command");

    if (cmd === "clear") {
        output.innerHTML = "";
        return;
    }

    if (cmd === "music") {
        const oldPopup = document.querySelector(".music-popup");
        if (oldPopup) {
          oldPopup.remove();
        }

  printLine("Launching Music Popup V6...", "ok");

  const popup = document.createElement("div");
  popup.className = "music-popup";
  popup.innerHTML = `
    <div class="music-popup-header">♪ KevinOS Music Popup V6</div>
    <div class="music-popup-body">
      <p>Status: ready</p>
      <p>Source: YouTube / Kevin Playlist</p>
      <p>Mode: cyberpunk radio</p>
      <button class="open-playlist-btn">Open Playlist</button>
      <button class="close-music-popup">Close</button>
    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector(".open-playlist-btn").addEventListener("click", function () {
    window.open("https://www.youtube.com/@tranafbaskevjn/playlists", "_blank");
  });

  popup.querySelector(".close-music-popup").addEventListener("click", function () {
    popup.remove();
  });

  return;
}

    if (commands[cmd]) {
  commands[cmd].forEach((line, index) => {
    setTimeout(() => {
      typeLine(line, "ok", 8);
    }, index * 180);
  });
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
    projectReport.textContent = "";
    projectModal.classList.add("show");

    let text = projectReports[projectKey];
    let i = 0;

    function typeReport() {
      if (i < text.length) {
        projectReport.textContent += text.charAt(i);
        i++;
        setTimeout(typeReport, 8);
      }
    }

typeReport();
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
