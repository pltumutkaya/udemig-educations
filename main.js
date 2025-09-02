// Html'den Elemaları Javascript'e çekme
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

// menuBtn'e tıklanınca nav kısmını aç-kapa yap

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
