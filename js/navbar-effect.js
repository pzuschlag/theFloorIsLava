var navBar = document.getElementsByTagName("nav")[0];

function navBarEffect() {
  if (document.body.scrollTop >= navBar.offsetHeight || document.documentElement.scrollTop >= navBar.offsetHeight) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", navBarEffect);