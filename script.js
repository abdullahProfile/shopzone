const menu=document.querySelector('.header-right');

function openMenu(){
    menu.style.display = 'flex';
    menu.style.right = '0';
    menu.style.transition = 'right 0.4s ease-in-out';
    menu.style.position = 'absolute';
    menu.style.top = '0';
    menu.style.width = '70%';
    menu.style.height = '30vh';
    menu.style.padding = '20px';
}

function closeMenu(){
  menu.style.display = 'none';
}

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = dot.getAttribute('data-index');

    // Hide all slides and remove active dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  });
});