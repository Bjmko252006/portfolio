const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("closeLightbox");

const certificateImages = document.querySelectorAll(".cert-image");

certificateImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");

        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

        setTimeout(() => {
            lightbox.classList.add("show");
        }, 10);
    });
});

function closeModal() {
    lightbox.classList.remove("show");

    setTimeout(() => {
        lightbox.classList.add("hidden");
        lightbox.classList.remove("flex");
    }, 300);
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

