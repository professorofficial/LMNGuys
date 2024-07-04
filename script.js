document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.querySelector('video').play();
                const bgColor = section.getAttribute('data-bgcolor');
                document.body.style.backgroundColor = bgColor;
                header.style.backgroundColor = bgColor;
                footer.style.backgroundColor = bgColor;
            } else {
                section.querySelector('video').pause();
            }
        });
    });
});