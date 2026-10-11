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
		if (!dragging) return;

		var rect = element.getBoundingClientRect();

		console.log(element.ultiX, element.ultiY)

		element.style.left = e.clientX - betweenX + 'px';
		element.style.top = e.clientY - betweenY + 'px';
	});

	document.addEventListener('mouseup', (e) => {
		dragging = false;
	});
}