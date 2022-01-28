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
    console.log('adicionado')
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


// Area Player Bottom 
function gerarPlayer(musica, musicas){
  document.getElementById('player-bottom').innerHTML=
  `
  <div class="player-bottom_music">
  <div class="img-music">
      <img src="./assets/medias/img/img-musics/${musicas[musica].img}" alt="music-banner">
  </div>

      <div class="info">
          <p class="nome-music text-lg">${musicas[musica].nome}</p>
          <p class="nome-autor text-lg">${musicas[musica].cantor}</p>
      </div>
      <img class="heart-fav" src="./assets/medias/img/img-musics/heart (2).svg" alt="heart-2">
</div>
<div class="player-bottom_controls">
  <div class="controls">
      <img src="./assets/medias/img/bottomPlayerImg/skip-back.svg" id="back-button" alt="back-button">
      <img src="./assets/medias/img/bottomPlayerImg/play.svg" id="play-button" alt="play-button">
      <img src="./assets/medias/img/bottomPlayerImg/skip-back-1.svg" id="next-button" alt="next-button">
  </div>
  <div class="music-progressBar">
      <span class="currentValueMusic">1:25</span>
      <div class="progressArea">
          <div class="progressBar"></div>
          <div class="CurrentprogressBar"></div>
      </div>
      <span class="totalValueMusic">3:00</span>
  </div>
  <div class="volume-bar">
      <img src="./assets/medias/img/bottomPlayerImg/volume-up.svg" alt="volume-up">

      <div class="progressArea">
          <div class="progressBar"></div>
          <div class="CurrentprogressBar"></div>
      </div>
  </div>
  <div class="controls-2">
      <img src="./assets/medias/img/bottomPlayerImg/Repeat.svg" alt="Repeat">
      <img src="./assets/medias/img/bottomPlayerImg/Aleatori.svg" alt="Aleatori">
      <img src="./assets/medias/img/bottomPlayerImg/Vector.svg" alt="Vector">
  </div>
</div>
</div>
  `
  
}


function ativarPlayer(musicas){
  const musicasDom = document.querySelectorAll('div.music-area');
  musicasDom.forEach((musica, index) => {
    
   const btnPlay = document.querySelector(`#${musica.id}>.buttons-musics>.play`)
   btnPlay.addEventListener('click', ()=>{
    const player = document.querySelector('#player-bottom')
      
    if(player.classList.contains('abrir')){
      player.classList.remove('abrir')
    }else{
      player.classList.add('abrir')

      const musicSplit = musica.id.split("-", 2)
      gerarPlayer(musicSplit[1], musicas)
    }
    if(btnPlay.classList.contains('pause')){
      btnPlay.setAttribute('src', './assets/medias/img/img-musics/Play (2).svg')
      btnPlay.classList.remove('pause')
    }else{
      btnPlay.setAttribute('src', './assets/medias/img/img-musics/pause.svg')
      btnPlay.classList.add('pause')
    }
    

    })
  })
}

ativarPlayer(musicas)



//================LIMPA O CAMPO DO MODAL =======================
const limparCampo = () => {
  const fields = document.querySelectorAll(".field-reg");
  const fields2 = document.querySelectorAll(".field-login");
  fields2.forEach((field) => (field.value = ""));
  fields.forEach((field) => (field.value = ""));
};

  //================PERMITE PEGAR TODOS OS DADOS DE UM DETERMINADO BD DO LOCAL STORAGE =======================
  const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbCliente")) ?? [];
  
  
  
  //================PERMITE ADICIONAR  DADOS A UM DETERMINADO BD DO LOCAL STORAGE =======================
  const setLocalStorage = (dbCliente) =>
    localStorage.setItem("dbCliente", JSON.stringify(dbCliente));
  
  
    //================LE TODOS OS CLIENTES E NO LOCAL STORAGE =======================
  
  const readClient = () => getLocalStorage();
  
  //================CRIA UM CLIENTE E SALVA NA LOCAL STORAGE =======================
  const createClient = (client) => {
    const dbCliente = getLocalStorage();
    dbCliente.push(client);
    setLocalStorage(dbCliente);
  };
  const isValidCadastro = () => {
    return document.getElementById("form-register").reportValidity();
  };
  const saveClient = () => {
    if (isValidCadastro()) {
      const client = {
        nome: document.getElementById("nameRegister").value,
        username: document.getElementById("usernameRegister").value,
        email: document.getElementById("emailRegister").value,
        password: document.getElementById("passwordRegister").value,
      };
      createClient(client);
      limparCampo();
      document.location.reload(true);
    }
  };
  
  const isValidLogin= () => {
    return document.getElementById("form-login").reportValidity();
  };
const validarLogin = () => {
  if(isValidLogin()){
    const userAtual = document.getElementById('usernameLogin').value
    const passAtual = document.getElementById('passwordLogin').value
   
    const contas = readClient()
    let r = []
    contas.forEach((conta, index)=>{

  
        if(userAtual != undefined && passAtual != undefined){
          if(userAtual == conta.username && passAtual == conta.password ){
            r = [{id:index, conta: conta, valido: true}]
          }
        }
    })
    return r
  }


}



//Tela de Login Area
const controlTelaLogin = () => {
  const telaLogin = document.querySelector('#telaLogin');
  const body = document.querySelector('body');
  const telaPrincipal = document.querySelector('#all-page');
  const btnEntrar = document.querySelector('#entrarLogin');




  btnEntrar.addEventListener('click', () => {
    if(validarLogin().length == 1){
      logar()
    }else{
      limparCampo()
      document.querySelector('#aviso-invalido').style.display = 'flex'
    }
    
  })

  const logar = () =>{
      telaLogin.style.display = 'none'
      telaPrincipal.style.display = 'flex'
      document.querySelector('#title-top').innerHTML= `Playlist for ${validarLogin()[0].conta.nome} `
      telaPrincipal.style.opacity = '1'
      body.style.overflowY = 'scroll';
  }

  const boxFormAnimation = () =>{
    const loginBtn = document.querySelector('.toRegister');
    const registerBtn = document.querySelector('.toLogin');
    const loginArea = document.querySelector('#login-area');
    const textBox = document.querySelector('.textBox');
    const registerArea = document.querySelector('#register-area');

    loginBtn.addEventListener('click', ()=> {
      registerArea.classList.remove('modoLogin')
      textBox.classList.remove('modoLogin')
      loginArea.classList.remove('modoLogin')
      registerArea.classList.add('modoRegistro')
      textBox.classList.add('modoRegistro')
      loginArea.classList.add('modoRegistro')
    })
    registerBtn.addEventListener('click', ()=> {
      registerArea.classList.remove('modoRegistro')
      textBox.classList.remove('modoRegistro')
      loginArea.classList.remove('modoRegistro')
      registerArea.classList.add('modoLogin')
      textBox.classList.add('modoLogin')
      loginArea.classList.add('modoLogin')
    })
  }
  boxFormAnimation()
}

controlTelaLogin()

document.getElementById("enviarRegister").addEventListener("click", saveClient);