function applyToggleManagement(element) {
	element.addEventListener('click', (e) => {
		e.preventDefault();

		if (e.detail % 2 === 0) {
			if (!element.isMaximized) {
				maximize(element);
				element.isMaximized = true
			} else {
				restore(element);
				element.isMaximized = false
			}
		}
	})
}

function maximize(element) {
	gsap.to(element, {
		duration: .3,
		left: 0, top: 0,
		width: '100%', height: '100%',
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

function snapLeft(element) {
	gsap.to(element, {
		duration: .3,
		left: 0, top: 0,
		width: '50%', height: '100%',
		ease: 'smoothed'
	});
}

function snapRight(element) {
	gsap.to(element, {
		duration: .3,
		left: `calc(100% - ${window.innerWidth/2}px)`,
		top: 0,
		width: '50%', height: '100%',
		ease: 'smoothed',
		onComplete: () => {
		    // Una vez que llegó, hacemos el cambio de propiedades CSS sin que el usuario lo note
		   gsap.set(element, { left: "auto", right: "0px" });
		}
	});
}