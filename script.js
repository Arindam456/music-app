// You can add interactivity here, for example, when user hovers over the song links.
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ff0';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});