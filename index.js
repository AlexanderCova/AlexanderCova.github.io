const phone_image = document.findElementById('phone-icon');

phone_image.addEventListener('click', function(e) {
	e.preventDefault();


	phone_image.classList.remove('rotation-anim');

	void phone_image.offsetWidth;

	phone_image.classList.add('rotation-anim');



}, false);