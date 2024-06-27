const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const sections = document.querySelectorAll('.test');
sections.forEach((section) => {
    observer.observe(section);
    section.addEventListener('transitionend', () => {
        section.style.transition = 'none';
    });
});

const subHeads = document.querySelectorAll('.sub_head');
subHeads.forEach((subHead) => {
    observer.observe(subHead);
});
