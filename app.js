function toggleAccordeon(id) {
  let accorActive = document.getElementById(id);
  accorActive.classList.toggle("active");
}

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
closeBtn.addEventListener("click", myFunction);
function myFunction() {
  sidenav.classList.toggle("active");
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
let blockPrincipal = document.getElementById("blockPrincipal")
// let block1 = document.getElementById("block1")
// let etiquette = document.getElementById("etiquette1")

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


window.addEventListener('load', () => {
  const TL = gsap.timeline({paused: true});
  TL
  // .staggerFrom(sidenav, durée de l'animation, {top: 0, opacity: 0, ease: "power1.in"}, delay entre les animations (staggerFrom))
  .staggerFrom(sidenav, 1.3, { opacity: 0, ease: "power1.in"}, 0.3)
  .staggerFrom(prenom, 0.6, {left: -50, opacity: 0, ease: "power2.in"}, 0.3, '-=1')
  .staggerFrom(titreDeveloppeur, 0.6, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  .staggerFrom(blockPrincipal, 0.6, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  // .staggerFrom(block1, 0.7, { opacity: 0, ease: "power2.out"}, 0.4)
  // .staggerFrom(etiquette, 0.8, { opacity: 0, ease: "power2.out"}, 0.5)
  .from(modeMoon, 1.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  .from(modeSun, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  .from(openn, 1.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  TL.play();
})


