//there is a css attribute that allows for addition of styles when an element is in view
//i do not remember the name of it, so I am using this instead to check 
//if you remember the name of the css feature, you can feel free to replace this with it

(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('visible');
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.4
    });

    document.querySelectorAll('.fader').forEach(fader => {
        observer.observe(fader);
    });
})();