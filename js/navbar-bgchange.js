const navbar = document.getElementById('mainNav')

window.onscroll = function() {

	// pageYOffest or scrollY

	if (window.pageYOffset > 100) {
		navbar.classList.add('scrolled')
	} else {
		navbar.classList.remove('scrolled')
	}
}
