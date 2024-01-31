const navigation = document.querySelector('.header .nav-bar .nav-list .navigation');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const courses = document.querySelectorAll('.course')

navigation.addEventListener('click', () => {
	navigation.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		navigation.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
     entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 0.5
})

courses.forEach(course => {
  observer.observe(course)
})
