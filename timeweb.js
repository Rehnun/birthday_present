function updateTimer() {
    const birthDate = new Date("2007-04-30T00:00:00");
    const now = new Date();
    
    let diff = now - birthDate;
  
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);
  
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * (1000 * 60 * 60 * 24 * 30.44);
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
  
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
  
    const seconds = Math.floor(diff / 1000);
  
    document.getElementById('timer').innerHTML = `
      ${years} tahun, ${months} bulan, ${days} hari, 
      ${hours} jam, ${minutes} menit, ${seconds} detik
    `;
  }
  
  // Update setiap 1 detik
  setInterval(updateTimer, 1000);
  
  // Pertama kali jalankan
  updateTimer();
  