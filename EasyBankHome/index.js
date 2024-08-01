function scrollHeader(){
    let sections = document.querySelectorAll('section');
    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;

            if(top >= offset && top < offset + height) {
                 section.classList.add('show-animate');
            }else {
                 section.classList.remove('show-animate');
            }
        });
    }
}
scrollHeader()

const menuOpen = document.querySelector('.menu-icon')
const headerPosition = document.querySelector('.header-position')

menuOpen.addEventListener('click', () => {
    headerPosition.classList.add('active')
    console.log('active adicionado !')
})
const menuClose = document.querySelector('.icon-close')
menuClose.addEventListener('click', () => {
    headerPosition.classList.remove('active')
    console.log('active removido !')
})