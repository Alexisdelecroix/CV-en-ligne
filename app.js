let sidenav = document.getElementById("myAside");
let openn = document.getElementById("open");
let closeBtn = document.getElementById("closeBtn");

openn.onclick = function openNav() {
    sidenav.classList.add("active");
  }
closeBtn.onclick = function closeNav() {
    sidenav.classList.remove("active");
  }

  
let detail = document.getElementById("overlay");
let opennDetail = document.getElementById("openDetail");
let closeeDetail = document.getElementById("closeDetail");

opennDetail.onclick = function openNav() {
    detail.classList.add("active");
  }
closeeDetail.onclick = function closeNav() {
    detail.classList.remove("active");
  }

  