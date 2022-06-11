// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const navbar = document.getElementById("navbar");
let previousScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  let newScrollPosition = window.scrollY;
  if (newScrollPosition < 100 || previousScrollPosition > newScrollPosition) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = -60 + "px";
  }
  previousScrollPosition = newScrollPosition;
});
