const btn = document.querySelector('.nav-link');
const subMenu = document.querySelector('.sub-menu');
const iconChevron = document.querySelector('.icon_chevron');
btn.addEventListener('click', () => {
    subMenu.classList.toggle('active');
    iconChevron.classList.toggle('active');
})

const icon_menu = document.querySelector('.icon-menu');
const icon_close = document.querySelector('.icon-close');
const sidebar = document.querySelector('#sidebar');

icon_menu.addEventListener('click', () => {
    sidebar.classList.add('active');
})

icon_close.addEventListener('click', () => {
    sidebar.classList.remove('active');
})