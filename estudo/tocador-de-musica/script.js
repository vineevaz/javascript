const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover');
const song = document.getElementById('audio');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');

const churrasco = {
    songName : 'Churrasco de Tuigay',
    artist : 'Bamor',
    File : 'Churrasco-de-Tuigay'
}
const bamorTlgd = {
    songName : 'Aqui so dar Bamor',
    artist : 'Bamor',
    File : 'bamor-tlgd'
}
const seFicarInferno = {
    songName : 'Se ficar vai ter duelo',
    artist : 'Inferno Coral',
    File : 'se-ficar-inferno'
}

let isPlaying = false;
let isShuffled = false
const originalPaylist = [churrasco, bamorTlgd, seFicarInferno]
let sortedPlaylist = [...originalPaylist];
let index =  0



function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play()
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause()
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    } else {
        playSong();
    }
}

function initializeSong() {
    cover.src = `imagens/${sortedPlaylist[index].File}.jpg`;
    song.src = `song/${sortedPlaylist[index].File}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

function previousSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}
function nextSong(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar(){

    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`)
}
function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX
    const jumpToTime = (clickPosition/width)* song.duration;
    song.currentTime = jumpToTime;
}
function shuffleArray(preShuffleArray){
   const size = preShuffleArray.length
   let currentIndex = size - 1;
   while(currentIndex > 0){
        let randomIndex = Math.floor(Math.random()*size);
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;

   }
}
function shuffleButtonClicked(){
    if(isShuffled === false){
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButton.classList.add('button-active');

    }else {
        isShuffled = false;
        sortedPlaylist = [...originalPaylist]
        shuffleButton.classList.remove('button-active');
    }
}

initializeSong();

play.addEventListener('click', playPauseDecider)
previous.addEventListener('click', previousSong)
next.addEventListener('click', nextSong)
song.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', jumpTo)
shuffleButton.addEventListener('click', shuffleButtonClicked)
