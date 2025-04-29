const text = "Terima kasih sudah selalu ada untuk ai. Karena uu hari ai jadi berwarna terus. Terus hidup dengan sehat dan gapai segala impian uu yaa sayang 🌸 I Love You ❤️✨";

let i = 0;
let speed = 50; // kecepatan ketik per huruf (lebih kecil = lebih cepat)

function startTyping() {
  i = 0;
  document.getElementById("message").innerHTML = "";
  typeWriter();
}

function typeWriter() {
  if (i < text.length) {
    document.getElementById("message").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// mulai ngetik saat halaman dibuka
startTyping();
