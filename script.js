document.addEventListener("DOMContentLoaded", () => {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const yesPopup = document.getElementById("yesPopup");
    const closePopup = document.getElementById("closePopup");
    const proposalCard = document.querySelector(".proposal-card");

    if (!yesBtn || !noBtn || !yesPopup || !closePopup || !proposalCard) {
        console.error("Required elements missing");
        return;
    }

    // ✅ YES CLICK
    yesBtn.addEventListener("click", () => {
        proposalCard.style.display = "none";
        yesPopup.style.display = "flex";
        launchHearts();
    });

    // ✅ CLOSE POPUP → bring buttons back
    closePopup.addEventListener("click", () => {
        yesPopup.style.display = "none";
        proposalCard.style.display = "block";
    });

    // ✅ NO BUTTON ESCAPE
    noBtn.addEventListener("touchstart", moveNoButton);
    noBtn.addEventListener("mouseover", moveNoButton);
});

/* No button movement */
function moveNoButton() {
    const noBtn = document.getElementById("noBtn");
    const container = noBtn.parentElement;

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

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

/* Heart animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes rise {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

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



