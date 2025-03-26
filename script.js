document.addEventListener("DOMContentLoaded", function() {
    console.log("Strona została załadowana!");

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const rotatePageBtn = document.getElementById("rotateBtn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    rotatePageBtn.addEventListener("click", function() {
        document.body.style.transform = "rotate(360deg)";
        document.body.style.transition = "transform 2s ease";
        setTimeout(() => {
            rotatePageBtn.style.opacity = "0";
            rotatePageBtn.style.pointerEvents = "none";
        }, 1000);
    });

    function updateClock() {
        const clock = document.getElementById("liveClock");
        if (clock) {
            const now = new Date();
            clock.textContent = now.toLocaleTimeString('pl-PL');
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});