const cKey = document.getElementById("C");
const cAudio = document.getElementById("cAudio");
const dKey = document.getElementById("D");
const dAudio = document.getElementById("dAudio");
const eKey = document.getElementById("E");
const eAudio = document.getElementById("eAudio");
const fKey = document.getElementById("F");
const fAudio = document.getElementById("fAudio");
const gKey = document.getElementById("G");
const gAudio = document.getElementById("gAudio");
const aKey = document.getElementById("A");
const aAudio = document.getElementById("aAudio");
const hKey = document.getElementById("H");
const hAudio = document.getElementById("hAudio");
const c2Key = document.getElementById("C2");
const c2Audio = document.getElementById("c2Audio");
const cuKey = document.getElementById("Cu");
const cuAudio = document.getElementById("cuAudio");
const duKey = document.getElementById("Du");
const duAudio = document.getElementById("duAudio");
const fuKey = document.getElementById("Fu");
const fuAudio = document.getElementById("fuAudio");
const guKey = document.getElementById("Gu");
const guAudio = document.getElementById("guAudio");
const auKey = document.getElementById("Au");
const auAudio = document.getElementById("auAudio");
const volume = document.getElementById("volume");
const audios = document.querySelectorAll('audio');

function playCAudio() {
  cAudio.currentTime = 0;
  cAudio.play();
}
function playCuAudio() {
  cuAudio.currentTime = 0;
  cuAudio.play();
}
function playDAudio() {
  dAudio.currentTime = 0;
  dAudio.play();
}
function playDuAudio() {
  duAudio.currentTime = 0;
  duAudio.play();
}
function playEAudio() {
  eAudio.currentTime = 0;
  eAudio.play();
}
function playFAudio() {
  fAudio.currentTime = 0;
  fAudio.play();
}

function playFuAudio() {
  fuAudio.currentTime = 0;
  fuAudio.play();
}
function playGAudio() {
  gAudio.currentTime = 0;
  gAudio.play();
}
function playGuAudio() {
  guAudio.currentTime = 0;
  guAudio.play();
}
function playAAudio() {
  aAudio.currentTime = 0;
  aAudio.play();
}
function playAuAudio() {
  auAudio.currentTime = 0;
  auAudio.play();
}

function playHAudio() {
  hAudio.currentTime = 0;
  hAudio.play();
}
function playC2Audio() {
  c2Audio.currentTime = 0;
  c2Audio.play();
}
function changeVolume() {  
    for (const audio of audios) {
        audio.volume = volume.value;
    }
}
for (const audio of audios) {
    audio.volume = volume.value;
}
volume.addEventListener('input', changeVolume);
document.addEventListener("keydown", function(event) {

    if (event.key === "1") {
        playCAudio();
    } else if (event.key === "2") {
        playDAudio();
    }else if (event.key === "3") {
        playEAudio();
    } else if (event.key === "4") {
        playFAudio();
    }else if (event.key === "5") {
        playGAudio();
    } else if (event.key === "6") {
        playAAudio();
    }else if (event.key === "7") {
        playHAudio();
    } else if (event.key === "8") {
        playC2Audio();
    }else if (event.key === "q") {
        playCuAudio();
    }else if (event.key === "w") {
        playDuAudio();
    }else if (event.key === "r") {
        playFuAudio();
    } else if (event.key === "t") {
        playGuAudio();
    }else if (event.key === "y") {
        playAuAudio();
    }
});

cKey.addEventListener("click", playCAudio);
cuKey.addEventListener("click", playCuAudio);
dKey.addEventListener("click", playDAudio);
duKey.addEventListener("click", playDuAudio);
eKey.addEventListener("click", playEAudio);
fKey.addEventListener("click", playFAudio);
fuKey.addEventListener("click", playFuAudio);
gKey.addEventListener("click", playGAudio);
guKey.addEventListener("click", playGuAudio);
aKey.addEventListener("click", playAAudio);
auKey.addEventListener("click", playAuAudio);
hKey.addEventListener("click", playHAudio);
c2Key.addEventListener("click", playC2Audio);
volume.addEventListener("change", changeVolume)
const divs = document.querySelectorAll("div");

for (const div of divs) {
  div.addEventListener("mousedown", function () {
    this.style.boxShadow = "inset 0px 0px 45px 20px rgba(66, 68, 90, 1)";
  });
  div.addEventListener("mouseup", function () {
    this.style.boxShadow = "";
  });
}

