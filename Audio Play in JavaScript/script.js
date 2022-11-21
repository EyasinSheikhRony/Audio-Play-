let buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let text = this.innerHTML;
    audioPlay(text);
    playAnim(text);
  });
}

function audioPlay(text) {
  switch (text) {
    case "a":
      let audioA = new Audio("/sounds/boom.wav");
      audioA.play();
      break;

    case "s":
      let audioS = new Audio("/sounds/clap.wav");
      audioS.play();
      break;

    case "d":
      let audioD = new Audio("/sounds/hihat.wav");
      audioD.play();
      break;

    case "f":
      let audioF = new Audio("/sounds/kick.wav");
      audioF.play();
      break;

    case "g":
      let audioG = new Audio("/sounds/openhat.wav");
      audioG.play();
      break;

    case "h":
      let audioH = new Audio("/sounds/ride.wav");
      audioH.play();
      break;

    case "j":
      let audioJ = new Audio("/sounds/snare.wav");
      audioJ.play();
      break;

    case "k":
      let audioK = new Audio("/sounds/tink.wav");
      audioK.play();
      break;

    case "l":
      let audioL = new Audio("/sounds/tom.wav");
      audioL.play();
      break;
  }
}

function playAnim(text) {
  let selectBtn = document.querySelector("." + text);
  selectBtn.classList.add("anim");
  setTimeout(() => {
    selectBtn.classList.remove("anim");
  }, 1000);
}

document.addEventListener("keypress", (e) => {
  let text2 = e.key;
  let text = text2.toLowerCase();
  audioPlay(text);
  playAnim(text);
});
