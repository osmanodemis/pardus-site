// Sayfa geçiş animasyonu
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Form doğrulama (iletisim.html için)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Lütfen tüm alanları doldurun.");
    } else {
      alert("Mesajınız başarıyla gönderildi!");
      form.reset();
    }
  });
}

// Galeri lightbox
const lightboxImages = document.querySelectorAll(".lightbox");
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");

lightboxImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxModal.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightboxModal?.addEventListener("click", () => {
  lightboxModal.style.display = "none";
});


document.addEventListener("DOMContentLoaded", () => {
  // Kalan kodlarınız...

  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;

  // Kullanıcı tercihini localStorage'dan oku
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
});
