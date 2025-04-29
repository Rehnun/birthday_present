function updateTimer() {
    ocument.addEventListener("DOMContentLoaded", function () {
  const birthDate = new Date("2007-04-30T00:00:00+07:00");

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

    const display = `
      🎂 ${years} tahun<br>
      📅 ${remainingDays} hari<br>
      ⏰ ${remainingHours} jam ${remainingMinutes} menit ${remainingSeconds} detik
    `;

    const timerEl = document.querySelector('.timer');
    if (timerEl) {
      timerEl.innerHTML = display;
    }
  }

  setInterval(updateAge, 1000);
  updateAge();
});
