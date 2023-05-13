let sidenav = document.getElementById("myAside");
let openn = document.getElementById("open");
let closeBtn = document.getElementById("closeBtn");

openn.onclick = function openNav() {
    sidenav.classList.add("active");
  }
closeBtn.onclick = function closeNav() {
    sidenav.classList.remove("active");
  }