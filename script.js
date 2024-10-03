window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.about,.skills,.project,.experience,.sertificate,.tech');

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      el.classList.add('scroll-active');
    }
  });
});


const btnMenu  = document.getElementById('btn')
const wrapperMenu = document.querySelector('.wrapper-menu')

btnMenu.addEventListener('click',()=>{
  wrapperMenu.classList.toggle('visible')
})