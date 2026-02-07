const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");

yesBtn.addEventListener("click", () => {
    finalMessage.innerHTML = `
  <div class="yes-title">💖 I knew hehehehehe 💖</div>
  <div class="yes-text">
    Happy Propose’s Day, my love 🌹<br>
    I choose you. Always.
  </div>
`;


    document.querySelector(".proposal-card").style.display = "none";
    launchHearts();
});


/* Mobile-friendly escape */
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

function moveNoButton() {
    const x = Math.random() * 120 - 60;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Heart celebration */
function launchHearts() {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "24px";
        heart.style.animation = "rise 3s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes rise {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

const memoriesTrack = document.querySelector(".memories-track");
const letter = document.querySelector(".letter-card");

if (memoriesTrack && letter) {
    memoriesTrack.addEventListener("animationiteration", () => {
        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}


const slider = document.getElementById("storySlider");
const cards = slider.querySelectorAll(".story-card");
let isJumping = false;

slider.addEventListener("scroll", () => {
    if (isJumping) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // When reaching the cloned letter (end)
    if (slider.scrollLeft >= maxScroll - 5) {
        isJumping = true;

        // Temporarily disable snap
        slider.style.scrollSnapType = "none";

        // Jump back to first letter
        slider.scrollLeft = 0;

        // Re-enable snap after jump
        setTimeout(() => {
            slider.style.scrollSnapType = "x mandatory";
            isJumping = false;
        }, 50);
    }
});
