document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    document.getElementById("dark-mode-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Typing Effect
    const text = "Luxury Fashion. Dark Aesthetics. Timeless Style.";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.querySelector(".typing-text").textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
