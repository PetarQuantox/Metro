const leftSideMenuIcon = document.getElementById('left-side-menu-toggler');
const rightSideMenuIcon = document.getElementById('right-side-menu-toggler');
const leftSideNav = document.querySelector('.left-side-nav');
const rightSideNav = document.querySelector('.right-side-nav');

leftSideMenuIcon.addEventListener('click', () => {
	leftSideNav.classList.toggle('open');
});

rightSideMenuIcon.addEventListener('click', () => {
	rightSideNav.classList.toggle('open');
});
