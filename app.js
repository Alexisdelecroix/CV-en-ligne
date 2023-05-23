// Ouverture et fermeture de l'aside
let sidenav = document.getElementById("myAside");
let openn = document.getElementById("open");
let closeBtn = document.getElementById("closeBtn");

// openn.onclick = function openNav() {
//   sidenav.classList.add("active");
// };
// closeBtn.onclick = function closeNav() {
//   sidenav.classList.remove("active");
// };


// Méthode AddEventListener
openn.addEventListener("click", myFunction);
closeBtn.addEventListener("click", myFunction2);

function myFunction() {
  sidenav.classList.add("active");
}

function myFunction2() {
  sidenav.classList.remove("active");
}


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
let para = document.getElementsByTagName("p");
let prenom = document.getElementsByTagName("h1");
let titreDeveloppeur = document.getElementsByTagName("h2");
let titre = document.getElementsByTagName("h3");
let titrewhite = document.getElementsByTagName("h3");
let intru = document.getElementById("intru");
let sousTitreBleu = document.getElementsByTagName("h4");
let cercle = document.getElementsByClassName("cercle");
let line = document.getElementsByClassName("block");
let overlayBox = document.getElementById("overlayBox");

modeMoon.onclick = function moon() {
  corpsDePage.classList.add("active");
  modeSun.classList.add("dark");
  intru.classList.add("titreDark");
  opennDetail.classList.add("active");
  overlayBox.classList.add("active");

  for (let i = 0; i < para.length; i++) {
    para[i].style.color = "white";
  }
  for (let i = 0; i < titre.length; i++) {
    titre[i].style.color = "black";
  }

  for (let i = 0; i < titrewhite.length; i++) {
    titrewhite[i].style.background = "white";
  }
  for (let i = 0; i < sousTitreBleu.length; i++) {
    sousTitreBleu[i].style.color = "#65BAFB";
  }

  for (let i = 0; i < prenom.length; i++) {
    prenom[i].style.color = "#65BAFB";
  }
  for (let i = 0; i < titreDeveloppeur.length; i++) {
    titreDeveloppeur[i].style.color = "#65BAFB";
  }
  for (let i = 0; i < cercle.length; i++) {
    cercle[i].style.background = "white";
  }
  for (let i = 0; i < line.length; i++) {
    line[i].style.borderLeft = "3px solid white";
  }
};

modeSun.onclick = function sun() {
  corpsDePage.classList.remove("active");
  modeSun.classList.remove("dark");
  intru.classList.remove("titreDark");
  opennDetail.classList.remove("active");
  overlayBox.classList.remove("active");
  for (let i = 0; i < para.length; i++) {
    para[i].style.color = "black";
  }
  for (let i = 0; i < titre.length; i++) {
    titre[i].style.color = "#537188";
  }
  for (let i = 0; i < titrewhite.length; i++) {
    titrewhite[i].style.background = "#cbb279";
  }

  for (let i = 0; i < sousTitreBleu.length; i++) {
    sousTitreBleu[i].style.color = "#537188";
  }

  for (let i = 0; i < prenom.length; i++) {
    prenom[i].style.color = "#537188";
  }
  for (let i = 0; i < titreDeveloppeur.length; i++) {
    titreDeveloppeur[i].style.color = "#537188";
  }
  for (let i = 0; i < cercle.length; i++) {
    cercle[i].style.background = "black";
  }

  for (let i = 0; i < line.length; i++) {
    line[i].style.borderLeft = "3px solid black";
  }
};
