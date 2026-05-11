const { animate, stagger } = anime;

document.addEventListener("DOMContentLoaded", () => {
    animate("header", {
        translateY: [-60, 0],
        opacity: [0, 1],
        duration: 1200,
        ease: "outExpo"
    });

    animate(".fade-in", {
        translateY: [35, 0],
        opacity: [0, 1],
        delay: stagger(180),
        duration: 1200,
        ease: "outExpo"
    });

    animate(".tech-item", {
        translateY: [45, 0],
        scale: [0.92, 1],
        opacity: [0, 1],
        delay: stagger(120),
        duration: 1100,
        ease: "outExpo"
    });

    animate(".cert-item", {
        translateY: [35, 0],
        scale: [0.92, 1],
        opacity: [0, 1],
        delay: stagger(130),
        duration: 1100,
        ease: "outExpo"
    });

    animate(".contact li", {
        translateY: [25, 0],
        opacity: [0, 1],
        delay: stagger(180),
        duration: 1000,
        ease: "outExpo"
    });

    // Typing animation for index.html message
    const message =
        "Hello! I'm Bong Joseph Sigayan, an aspiring IT Professional and future Software Developer. I am eager to improve my skills, gain more knowledge, and explore different areas within the IT field to prepare myself for future opportunities.";

    const animatedText = document.getElementById("animated-text");

    if (animatedText) {
        animatedText.textContent = "";

        let i = 0;

        function typeWriter() {
            if (i < message.length) {
                animatedText.textContent += message.charAt(i);
                i++;
                setTimeout(typeWriter, 28);
            }
        }

        typeWriter();
    }

    // Typing animation for about.html messages
    const aboutMessage1 =
        "An aspiring software developer passionate about creating innovative solutions through code. In my free time, I enjoy coding, playing mobile games such as Mobile Legends, Call of Duty, and Valorant, exploring new technologies, and playing basketball to keep my body active and healthy. I am hardworking, willing to learn, and always eager to improve my skills in programming.";

    const aboutMessage2 =
        "As a student pursuing a Bachelor of Science in Information Technology, I am dedicated to building a successful career in software development. I strive to continuously enhance my programming abilities and stay updated with the latest industry trends. My goal is to contribute meaningfully to projects that make a positive impact and to grow as a professional in the tech field.";

    const aboutText1 = document.getElementById("about-text-1");
    const aboutText2 = document.getElementById("about-text-2");

    function typeText(element, text, speed, callback) {
        if (!element) return;

        element.textContent = "";
        let index = 0;

        function typing() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }

        typing();
    }

    if (aboutText1 && aboutText2) {
        typeText(aboutText1, aboutMessage1, 5, () => {
            typeText(aboutText2, aboutMessage2, 5);
        });
    }
});

// Lightbox for Certifications
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("closeLightbox");
const certificateImages = document.querySelectorAll(".cert-image");

if (lightbox && lightboxImg && closeLightbox) {
    certificateImages.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.classList.remove("hidden");
            lightbox.classList.add("flex");

            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;

            lightbox.classList.add("show");

            animate("#lightbox-img", {
                scale: [0.75, 1],
                opacity: [0, 1],
                duration: 500,
                ease: "outBack"
            });
        });
    });

    function closeModal() {
        animate("#lightbox-img", {
            scale: [1, 0.85],
            opacity: [1, 0],
            duration: 250,
            ease: "inExpo",
            complete: () => {
                lightbox.classList.remove("show");
                lightbox.classList.add("hidden");
                lightbox.classList.remove("flex");
            }
        });
    }

    closeLightbox.addEventListener("click", closeModal);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}