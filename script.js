const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const phrases = [
  'Android Researcher • Emulator Engineer • Robot Developer',
  'ADB Lab • Web Interface • Automation Builder',
  'Building personal tools, experiments and creative projects'
];

const typing = document.getElementById('typing');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop(){
  if(!typing) return;
  const phrase = phrases[phraseIndex];
  typing.textContent = phrase.slice(0, charIndex) + '█';

  if(!deleting && charIndex < phrase.length){
    charIndex++;
    setTimeout(typeLoop, 45);
    return;
  }

  if(!deleting && charIndex === phrase.length){
    deleting = true;
    setTimeout(typeLoop, 1400);
    return;
  }

  if(deleting && charIndex > 0){
    charIndex--;
    setTimeout(typeLoop, 22);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  setTimeout(typeLoop, 250);
}

typeLoop();
