const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.fa-bars');
const header = document.querySelector('header');
const menu = document.querySelector('ul');

openMenu.addEventListener('click', () => {
    menu.classList.add('menu-show');
    header.classList.add('ztmav')
})
closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu-show');
    header.classList.remove('ztmav')
})

const reservationButton = document.getElementById('reservation');
const reservationWrapper = document.querySelector('.reservation-wrapper')
const reservationClose = document.getElementById('reservationClose')

reservationButton.addEventListener('click', () => {
    reservationWrapper.style.display = "flex"


    reservationClose.addEventListener('click', () => {
        reservationWrapper.style.display = "none"
    })
})



