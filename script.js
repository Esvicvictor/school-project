let navLinks = document.querySelector(".navLinks");
console.log(navLinks)

let openNav = document.getElementById("openNav");
console.log(openNav)

let closeNav = document.getElementById("closeNav");
console.log(closeNav)

openNav.onclick = function() {
    navLinks.style.marginRight = "0"
}

closeNav.onclick = function() {
    navLinks.style.marginRight = "200px"
}