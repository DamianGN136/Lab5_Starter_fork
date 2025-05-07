// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices(){
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);

    });
  }

  populateVoices();

  window.speechSynthesis.onvoiceschanged = populateVoices;


  speakButton.addEventListener('click', function(){
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedIndex = voiceSelect.value;
    if(selectedIndex !== 'select'){
      utterance.voice = voices[selectedIndex];
    }

    faceImage.src = 'assets/images/smiling-open.png';

    utterance.onend = () =>{
      faceImage.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterance);


  });
}