const items = document.querySelectorAll('.item');
const defaultContent = document.getElementById('default-content');
const hoverContent = document.getElementById('hover-content');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const details = item.getAttribute('data-details');

    hoverContent.textContent = details;

    defaultContent.classList.add('hidden');
    hoverContent.classList.remove('hidden');
  });

  item.addEventListener('mouseleave', () => {
    hoverContent.classList.add('hidden');
    defaultContent.classList.remove('hidden');
  });
});
