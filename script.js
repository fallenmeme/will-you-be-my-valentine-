document.addEventListener("DOMContentLoaded", function() {

    const revealBtn = document.getElementById("revealBtn");
    const hiddenMessage = document.getElementById("hiddenMessage");
    const bgMusic = document.getElementById("bgMusic");

    revealBtn.addEventListener("click", function() {
        hiddenMessage.classList.toggle("show");

        if(hiddenMessage.classList.contains("show")) {
            revealBtn.textContent = "Close My Heart 💔";
        } else {
            revealBtn.textContent = "Open My Heart 💖";
        }
    });

    /* Autoplay Fix (for browser restrictions) */
    document.body.addEventListener("click", function() {
        bgMusic.play().catch(() => {});
    }, { once: true });

});

