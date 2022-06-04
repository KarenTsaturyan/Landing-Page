const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const time = document.getElementById('time');
const progressContainer = document.getElementById('progress-container');
let a = 0;
let b = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('mus-title');
const logo = document.getElementById('logo');

// Song titles
const songs = ['musics/clouds.mp3', 'musics/control.mp3', 'musics/kosandra.mp3', 'musics/INDUSTRY BABY.mp3'];
const mNames = ['NF-Clouds', 'Halsey-Control', 'Miyagi&AndyPanda-Kosandra',"INDUSTRY BABY"];
const imgs = ["img/NF.jpg", 'img/Halsey.jpg', , "img/industry.jfif"]
// Keep track of song
let songIndex = 0;


// Update song details
function loadSong(Index) {
    audio.src=songs[Index]
    title.innerText = mNames[songIndex]
    logo.src = imgs[Index]
    if(imgs[Index]==undefined){
      imgs[Index]="img/back.jpg";
    }
}
//song start
function playSong() {
  loadSong(songIndex)
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}
//song end
function pauseSong() {
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  audio.pause();
}
function playPause(){
  if( playBtn.querySelector('i.fas').classList.contains('fa-pause')){
    pauseSong()
    musicContainer.classList.remove('play');
  }else if(playBtn.querySelector('i.fas').classList.contains('fa-play')){
    playSong()
    musicContainer.classList.add('play');
  }
}

function nextSong(){
  // playPause()
  if (songIndex>=songs.length-1) {
    songIndex==songs.length-1;
    playSong()
  }else{
  songIndex++;
  loadSong(songIndex)
  playSong()
  }
  if (!musicContainer.classList.contains('play')){
    musicContainer.classList.add('play');
  }
}
function previousSong(){
  // pauseSong()
  if (songIndex<=0) {
    songIndex == 0;
    playSong();
  }else{
  songIndex--
  loadSong(songIndex)
  playSong()
}
if (!musicContainer.classList.contains('play')){
  musicContainer.classList.add('play');
}
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  //time.innerHTML=Math.floor(audio.currentTime)+"---"+a + "__" + b;

}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}
// Time update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);
