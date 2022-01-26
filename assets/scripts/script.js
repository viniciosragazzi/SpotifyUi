let swiperCards = new Swiper("#cards-track", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    544: {
      slidesPerView: 1,
      spaceBetween: 500,
    },

    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1441: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

//Area Adicionar Musicas a pagina

const musicas = [
  {
    index: 0,
    nome: "Setting Up Our Beds In Minecraft",
    cantor: "Sleepy Fish",
    img: "Album.png",
    reps: "31",
  },
  {
    index: 1,
    nome: "Kimi Ja Nakya Dame Mitai",
    cantor: "Masayoshi Oishi",
    img: "image 1.png",
    reps: "290",
  },
  {
    index: 2,
    nome: "Clocks forward",
    cantor: "Psalm Trees",
    img: "image 2.png",
    reps: "7.350",
  },
  {
    index: 3,
    nome: "Velocities",
    cantor: "Sleepy Fish",
    img: "image 3.png",
    reps: "5.162",
  },
  {
    index: 4,
    nome: "Blue Terrain",
    cantor: "Project AER",
    img: "image 4.png",
    reps: "3.020",
  },
  {
    index: 5,
    nome: "Late night drive",
    cantor: "Project AER",
    img: "image 5.png",
    reps: "1.401",
  },
  {
    index: 6,
    nome: "Lone Digger",
    cantor: "Caravan Palace",
    img: "image 6.png",
    reps: "133.240",
  },
  {
    index: 7,
    nome: "That Feelin",
    cantor: "S3RL, Kayliana",
    img: "image 7.png",
    reps: "909",
  },
];

const addMusic = (musicas) => {
  musicas.forEach((musica, index) => {
    const music = document.createElement("div");
    music.classList.add("music-area");
    music.setAttribute("id", `musica-${index}`);
    music.innerHTML = ` <div class="img-music">
      <img src="./assets/medias/img/img-musics/${musica.img}" alt="music-banner">
    </div>
    <div class="info-music">
      <div class="info">
          <p class="nome-music text-lg">${musica.nome}</p>
          <p class="nome-autor text-lg">${musica.cantor}</p>
      </div>
      <div class="n-reps">
          <img src="./assets/medias/img/img-musics/Headphones.svg" alt="Headphones-icon">
          <span class="reps">${musica.reps}K</span>
      </div>
    </div>
    <div class="buttons-musics">
      <img class="heart" src="./assets/medias/img/img-musics/heart.svg" alt="heart" srcset="">
      <img class="play" src="./assets/medias/img/img-musics/play (2).svg" alt="play" srcset=""> 
    </div>`;

    document.querySelector("#musics-card").appendChild(music);
  });
};
addMusic(musicas);

// Area Lista de Amigos

const amigos = [
  {
    nome: "Kathryn Murphy",
    foto: "1.png",
    online: true,
    ouvindo: "Gavin Mikhail",
  },
  {
    nome: "Bessie Cooper",
    foto: "2.png",
    online: false,
    ouvindo: "",
  },
  {
    nome: "Kathryn Murphy",
    foto: "3.png",
    online: true,
    ouvindo: "C4C",
  },
  {
    nome: "Esther Howard",
    foto: "4.png",
    online: true,
    ouvindo: "Sleepy Fish",
  },
  {
    nome: "Leslie Alexander",
    foto: "5.png",
    online: false,
    ouvindo: "",
  },
  {
    nome: "Arlene McCoy",
    foto: "6.png",
    online: true,
    ouvindo: "WYS",
  },
  {
    nome: "Courtney Henry",
    foto: "7.png",
    online: true,
    ouvindo: "",
  },
];

const mostrarAmigos = (amigos) => {
  amigos.forEach((amigo, index) => {
    const friendArea = document.createElement("div");
    friendArea.classList.add('friend-area')
    friendArea.setAttribute('id', 'friend-index');
    let color = 'orange';
    let status;
    if(amigo.online === true){
      status = `Listening: ${amigo.ouvindo}`
      color = '#00f100';
    }else{
      status = 'Absent'
      
    }

    friendArea.innerHTML = `
    <div class="friend-picture">
    <img src="./assets/medias/img/friendsImg/${amigo.foto}" alt="friend-picture">
</div>
<div class="friend-info">
    <span class="friend-name text-lg">
    ${amigo.nome}
    </span>
    <span class="text-base friend-status"><i style="color:${color};" class="bi bi-circle-fill"></i> ${status}</span>
</div>
    `;
    document.querySelector('#div-friends').appendChild(friendArea)
  });
 
};

mostrarAmigos(amigos);
