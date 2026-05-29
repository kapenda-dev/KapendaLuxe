/* =========================
JAVASCRIPT
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* Navbar background on scroll */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.75)";
  }
  else{
    navbar.style.background = "rgba(255,255,255,0.08)";
  }

 // alert("Javascript connected successfully!");
});

/* =========================
ROOM DETAILS MODAL
========================= */

const modal = document.getElementById("roomModal");

const detailsButtons = document.querySelectorAll(".details-btn");

const closeModal = document.querySelector(".close-modal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalImage = document.getElementById("modalImage");


/* OPEN MODAL */

detailsButtons.forEach(button => {

  button.addEventListener("click", (e) => {

    e.preventDefault();

    modalTitle.textContent = button.dataset.title;

    modalDescription.textContent = button.dataset.description;

    modalPrice.textContent = button.dataset.price;

    modalImage.src = button.dataset.image;

    modal.classList.add("active");

  });

});


/* CLOSE MODAL */

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});


/* CLOSE WHEN CLICKING OUTSIDE */

window.addEventListener("click", (e) => {

  if(e.target === modal){
    modal.classList.remove("active");
  }

});

document.addEventListener("DOMContentLoaded", () => {

  const bookNowBtn = document.getElementById("bookNowBtn");
  const bookingModal = document.getElementById("bookingModal");
  const closeBooking = document.querySelector(".close-booking");

  // Safety check (prevents crashes)
  if (!bookNowBtn || !bookingModal || !closeBooking) {
    console.error("Missing required elements in HTML");
    return;
  }

  /* OPEN MODAL */
  bookNowBtn.addEventListener("click", (e) => {
    e.preventDefault();
    bookingModal.classList.add("active");
  });

  /* CLOSE MODAL */
  closeBooking.addEventListener("click", () => {
    bookingModal.classList.remove("active");
  });

  /* CLOSE WHEN CLICKING OUTSIDE */
  window.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
      bookingModal.classList.remove("active");
    }
  });

});

/* =========================
BOOKING MODAL
========================= */

const bookingModal = document.getElementById("bookingModal");
const openBookingBtn = document.getElementById("openBookingBtn");
const closeBooking = document.querySelector(".close-booking");
const roomTypeInput = document.getElementById("roomType");

/* OPEN BOOKING MODAL */

openBookingBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Get current room title from modal
  roomTypeInput.value = document.getElementById("modalTitle").textContent;

  bookingModal.classList.add("active");
});


/* CLOSE BOOKING MODAL */

closeBooking.addEventListener("click", () => {
  bookingModal.classList.remove("active");
});


/* CLOSE ON OUTSIDE CLICK */

window.addEventListener("click", (e) => {
  if(e.target === bookingModal){
    bookingModal.classList.remove("active");
  }
});


/* FORM SUBMIT */

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Booking Successful! We will contact you soon.");

  bookingModal.classList.remove("active");
});