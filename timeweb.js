function updateTimer() {
    const birthDate = new Date("2007-04-30T00:00:00+07:00");

// Fungsi untuk memperbarui usia
function updateAge() {
  const now = new Date();
  const diff = now - birthDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);

  const remainingDays = Math.floor(days % 365.25);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Format tampilan dengan emoji dan gaya lucu 💖
  const display = `
    🎂 ${years} tahun<br>
    📅 ${remainingDays} hari<br>
    ⏰ ${remainingHours} jam ${remainingMinutes} menit ${remainingSeconds} detik
  `;

  document.querySelector('.timer').innerHTML = display;
}

// Update setiap detik
setInterval(updateAge, 1000);

// Jalankan pertama kali saat halaman dibuka
updateAge();
