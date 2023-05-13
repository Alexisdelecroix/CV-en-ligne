let sidenav = document.getElementById("myAside");
let openn = document.getElementById("open");
let closeBtn = document.getElementById("closeBtn");



/* Set the width of the side navigation to 250px */


/* Set the width of the side navigation to 0 */


openn.onclick = function openNav() {
    sidenav.classList.add("active");
  }
closeBtn.onclick = function closeNav() {
    sidenav.classList.remove("active");
  }