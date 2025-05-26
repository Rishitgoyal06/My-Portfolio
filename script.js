var typed = new Typed(".typed-text", {
  strings: ["Front-End Developer", "Cloud Enthusiast", "UI/UX Learner", "Spring Boot Beginner"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  showCursor: false
});


function openModal(src, isPdf = false) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const pdfFrame = document.getElementById("pdfFrame");

  modal.style.display = "flex";

  if (isPdf) {
    modalImg.style.display = "none";
    pdfFrame.style.display = "block";
    pdfFrame.src = src;
  } else {
    pdfFrame.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = src;
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const pdfFrame = document.getElementById("pdfFrame");

  modal.style.display = "none";
  modalImg.src = "";
  pdfFrame.src = "";
}

function toggleMenu() {
  const nav = document.querySelector(".nav_elements");
  nav.classList.toggle("show");
}
