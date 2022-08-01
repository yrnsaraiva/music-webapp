let musicas = [
    {
        titulo: "SKY KING",
        artista: "Shirley Ágata ft Jay X",
        capa: "../media/images/covers/skycover.jpg",
        file: "../media/Music/sky%20(online-audio-converter.com).mp3"
    },
    {
        titulo: "yuran e lindo",
        artista: "e verdade",
        capa: "../media/images/covers/skycover.jpg",
        file: "../media/Music/sky%20(online-audio-converter.com).mp3"
    },
];


let musica = document.querySelector("audio");
let indexMusica = 0

let cover = document.querySelector(".card-image");
let title = document.querySelector(".card-content h5");
let artist = document.querySelector(".card-content p");

renderizar(indexMusica)

cover.style.background = `url('${musicas[indexMusica].capa}') no-repeat center center / cover`

document.querySelector(".botao-play").addEventListener("click", playmusic)
document.querySelector(".botao-pause").addEventListener("click", pausemusic)

document.querySelector(".prev").addEventListener("click", () => {
    indexMusica--;
    renderizar(indexMusica);
})
document.querySelector(".next").addEventListener("click", () => {
    indexMusica++;
    renderizar(indexMusica);
})

//funcoes

function renderizar(index){
    musica.setAttribute("src", musicas[index].file)
    musica.addEventListener("loadeddata", () => {
        title.textContent = musicas[index].titulo;
        artist.textContent = musicas[index].artista;
        cover.style.background = `url('${musicas[index].capa}') no-repeat center center / cover`
    });
}

function playmusic(){
    musica.play();
}

function pausemusic(){
    musica.pause();
}

