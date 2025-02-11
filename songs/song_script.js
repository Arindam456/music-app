// Example: Hover effect on lyrics
document.querySelectorAll('.lyrics p').forEach(para => {
  para.addEventListener('mouseover', function() {
    this.style.color = '#ff6347';
    this.style.fontWeight = 'bold';
  });
  para.addEventListener('mouseout', function() {
    this.style.color = '#333';
    this.style.fontWeight = 'normal';
  });
});