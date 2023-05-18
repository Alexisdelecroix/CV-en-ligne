// Ouverture et fermeture de l'aside
let sidenav = document.getElementById("myAside");
let openn = document.getElementById("open");
let closeBtn = document.getElementById("closeBtn");

openn.onclick = function openNav() {
    sidenav.classList.add("active");
  }
closeBtn.onclick = function closeNav() {
    sidenav.classList.remove("active");
  }

// Ouverture et fermeture de la Popup
let detail = document.getElementById("overlay");
let opennDetail = document.getElementById("openDetail");
let closeeDetail = document.getElementById("closeDetail");

opennDetail.onclick = function openNav() {
    detail.classList.add("active");
  }
closeeDetail.onclick = function closeNav() {
    detail.classList.remove("active");
  }



// Mode Dark
// let modeMoon = document.getElementById("moon");
// let modeSun = document.getElementById("sun");
// let corpsDePage = document.getElementById("corps");


// modeMoon.onclick = function moon() {
//   corpsDePage.classList.add("active");
//   modeSun.classList.add("dark");
// }

// modeSun.onclick = function sun() {
//   corpsDePage.classList.remove("active");
// }


  