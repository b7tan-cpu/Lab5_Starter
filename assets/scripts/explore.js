// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const face = document.querySelector("#explore img");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;

  button.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}