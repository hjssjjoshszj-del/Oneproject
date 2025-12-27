// Countdown
function updateCountdown() {
    const newYear = new Date("January 1, 2026 00:00:00");
    const now = new Date();
    const diff = newYear - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
        `${d} kun ${h} soat ${m} minut ${s} soniya qoldi 🎉`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Message
function showMessage() {
    document.getElementById("message").innerText =
        "🎊 Yangi yiling bilan! Sog‘lik, omad va muvaffaqiyat tilayman! 🎊";
}

// Game
let score = 0;

function scorePoint() {
    score++;
    document.getElementById("score").innerText = score;

    const ball = document.getElementById("ball");
    const x = Math.random() * 250;
    const y = Math.random() * 150;

    ball.style.transform = `translate(${x}px, ${y}px)`;
}


// ❄️ FULL SCREEN HEAVY SNOW (NONSTOP)
const snowCount  = 180; // qanchalik ko‘p bo‘lsa — shunchalik qalin

for (let i = 0; i < snowCount ; i++) {
    createSnow();
}

function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = Math.random() > 0.5 ? "❄️" : "✦";

    resetSnow(snow);

    document.body.appendChild(snow);

    snow.addEventListener("animationiteration", () => {
        resetSnow(snow);
    });
}

function resetSnow(snow) {
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = Math.random() * 14 + 10 + "px";
    snow.style.opacity = Math.random();
    snow.style.animationDuration = Math.random() * 4 + 4 + "s";
}

const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

music.volume = 0; // boshida ovoz 0
let fadeInterval = null;

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerText = "⏸ To‘xtatish";
        fadeIn();
    } else {
        btn.innerText = "▶️ Musiqa";
        fadeOut();
    }
}

function fadeIn() {
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
        if (music.volume < 1) {
            music.volume = Math.min(music.volume + 0.05, 1);
        } else {
            clearInterval(fadeInterval);
        }
    }, 100);
}

function fadeOut() {
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
        if (music.volume > 0) {
            music.volume = Math.max(music.volume - 0.05, 0);
        } else {
            music.pause();
            clearInterval(fadeInterval);
        }
    }, 100);
}

// 🎆 FIREWORKS
function createFirework() {
    const fw = document.createElement("div");
    fw.classList.add("firework");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    fw.style.left = x + "px";
    fw.style.top = y + "px";

    // rang
    const colors = ["#ff0", "#f00", "#0f0", "#0ff", "#f0f", "#fff", "#ffa500"];
    fw.style.background = colors[Math.floor(Math.random() * colors.length)];

    // harakat yo‘nalishlari
    fw.style.setProperty("--x", (Math.random() - 0.5) * 200 + "px");
    fw.style.setProperty("--y", (Math.random() - 0.5) * 200 + "px");

    document.getElementById("fireworks").appendChild(fw);

    setTimeout(() => {
        fw.remove();
    }, 1000);
}