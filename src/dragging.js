let zIndex = 0;

function applyDrag(element) {
	let dragging = false;
	let betweenX, betweenY;

	element.addEventListener('mousedown', (e) => {
		if (element.isMaximized) return

		e.preventDefault();		// Prevent click from triggering drag

		dragging = true;

		var rect = element.getBoundingClientRect();

		betweenX = e.pageX - rect.x;
		betweenY = e.pageY - rect.y;
			
		zIndex++

		element.style.zIndex = zIndex;

		// element.style.zIndex = ++applyDrag.zIndex || (applyDrag.zIndex = 1);
		
		console.log('between in X: ', betweenX, 'between in Y: ', betweenY)
	});

	document.addEventListener('mousemove', (e) => {
		if (!dragging || element.isMaximized) return;

		var rect = element.getBoundingClientRect();

		console.log(element.ultiX, element.ultiY)

		element.style.left = e.clientX - betweenX + 'px';
		element.style.top = e.clientY - betweenY + 'px';
	});

	document.addEventListener('mouseup', (e) => {
		if (!dragging) return 

		var rect = element.getBoundingClientRect();

		let difer = {
			x: e.pageX - rect.x,
			y: e.pageY - rect.y
		};

		let acoplar = snapWindow(element, difer);

		/**
		 * 
		 * Se le envía una señal desde la
		 * función snapWindow que garantice
		 * antes de acoplarse guarde la
		 * ultima posicion x, y de la ventana.
		 * 
		 * **/

		/**
		 * 
		 * En otras palabras, hacer que distinga entre
		 * mover o acoplar una ventana por el usuario.
		 * 
		 * **/

		if (!acoplar) {
			element.ultiX = rect.x;
			element.ultiY = rect.y;
		}

		dragging = false;
	});
}

function snapWindow(win, d) {
	var rect = win.getBoundingClientRect();
	var flag = true;
	
	if (rect.y + d.y < 1) {
		maximize(win);
		win.isMaximized = true;
	} else if (rect.x + d.x < 1) {
		snapLeft(win);
		win.isMaximized = true;
	} else if (rect.x + d.x > window.innerWidth - 2) {
		snapRight(win);
		win.isMaximized = true;
	} else {
		flag = false;
	}

	return flag;
}