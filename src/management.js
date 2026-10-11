function applyToggleManagement(element) {
	element.addEventListener('click', (e) => {
		e.preventDefault();

		if (e.detail % 2 === 0) {
			if (!element.isMaximized) {
				maximize(element);
			} else {
				restore(element);
			}

			var rect = element.getBoundingClientRect();
			
			element.ultiX = rect.x;
			element.ultiY = rect.y;

			element.isMaximized = !element.isMaximized;
		}
	})
}

function maximize(element) {
	gsap.to(element, {
		duration: .3,
		left: 0, top: 0,
		width: '50%', height: '100%',
		ease: 'smoothed'
	})
}

function restore(element) {
	gsap.to(element, {
		duration: .3,
		left: element.ultiX, top: element.ultiY,
		width: '525px', height: 120,
		ease: 'smoothed'
	});
}