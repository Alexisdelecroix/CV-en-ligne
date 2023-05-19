// Ouverture et fermeture de l'aside
let sidenav = document.getElementById("myAside");
let openn = document.getElementById("open");
let closeBtn = document.getElementById("closeBtn");

openn.onclick = function openNav() {
  sidenav.classList.add("active");
};
closeBtn.onclick = function closeNav() {
  sidenav.classList.remove("active");
};

// Ouverture et fermeture de la Popup
let detail = document.getElementById("overlay");
let opennDetail = document.getElementById("openDetail");
let closeeDetail = document.getElementById("closeDetail");

opennDetail.onclick = function openNav() {
  detail.classList.add("active");
};
closeeDetail.onclick = function closeNav() {
  detail.classList.remove("active");
};

// Mode Dark
let modeMoon = document.getElementById("moon");
let modeSun = document.getElementById("sun");
let corpsDePage = document.getElementById("corps");

// Paragraphe
let para = document.getElementsByTagName("p");
let titre = document.getElementsByTagName("h3");
let titrewhite = document.getElementsByTagName("h3");
let intru = document.getElementById("intru");

modeMoon.onclick = function moon() {
  corpsDePage.classList.add("active");
  modeSun.classList.add("dark");
  intru.classList.add("titreDark");
  // Si le mode lune est active alors tu met tous les paragraphes en blanc
  for (let i = 0; i < para.length; i++) {
    para[i].style.color = "white";
  }
  for (let i = 0; i < para.length; i++) {
    titre[i].style.color = "black";
  }

  for (let i = 0; i < para.length; i++) {
    titrewhite[i].style.background = "white";
  }
};

modeSun.onclick = function sun() {
  corpsDePage.classList.remove("active");
  modeSun.classList.remove("dark");
  intru.classList.remove("titreDark");
  for (let i = 0; i < para.length; i++) {
    para[i].style.color = "black";
  }
  for (let i = 0; i < para.length; i++) {
    titre[i].style.color = "#537188";
  }
  for (let i = 0; i < para.length; i++) {
    titrewhite[i].style.background = "#cbb279";
  }
};
