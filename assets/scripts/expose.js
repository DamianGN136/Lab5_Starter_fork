// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');

  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;

  hornImage.src = `assets/images/${selectedHorn}.svg`;
  hornImage.alt = selectedHorn;
  audio.src = `assets/audio/${selectedHorn}.mp3`


  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', function(){

    const volumeValue = Number(volumeSlider.value);

    if(volumeValue === 0){
      volumeIcon.src='assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    }
    else if(volumeValue < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    }
    else if(volumeValue < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }

    audio.volume = volumeValue / 100;


  });

  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  playButton.addEventListener('click', function(){

    audio.play();


    if(hornSelect.value === 'party-horn'){
      jsConfetti.addConfetti();
    }


  });




  });
}