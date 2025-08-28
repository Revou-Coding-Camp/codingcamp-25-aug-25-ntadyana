// Burger menu toggle
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("open");
});

// Ucapan "Hi Nama"
let userName = prompt("Masukkan nama kamu:");
let welcomeText = document.getElementById("welcome-text");
if (userName && userName.trim() !== "") {
  welcomeText.innerText = "Hi " + userName + ", Welcome To SM (Suka Mengjamet)";
} else {
  welcomeText.innerText = "Hi, Welcome To SM (Suka Mengjamet)";
}

// Validasi Form & Tampilkan Output
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("messageText").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Harap isi semua kotak ya boss 😅");
    return;
  }

  // Ambil current time
  let now = new Date();
  let currentTime = now.toLocaleString();

  document.getElementById("output").innerHTML = `
    <p><em>Waktu Submit: ${currentTime}</em></p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Nomor HP:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  // Animasi output box
  let outputBox = document.getElementById("output");
  outputBox.classList.remove("show"); // reset kalau submit ulang
  setTimeout(() => {
    outputBox.classList.add("show");
  }, 50);

  // Reset form setelah submit
  document.getElementById("contactForm").reset();
});
