
const btnUp = {
	el: document.querySelector('.sticky__arrow'),
		show() {
		this.el.classList.remove('btn-up_hide');
	},
	hide() {
		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			scrollY > 400 ? this.show() : this.hide();
		});
		document.querySelector('.sticky__arrow').onclick = () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

btnUp.addEventListener();


const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu__list--active');
});

