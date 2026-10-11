// import '/css/styles.css';

const desktop = document.getElementById('desktop');
const btnAdd = document.getElementById('btn-add');

btnAdd.onclick = () => {
	let element = document.createElement('div');
	element.className = 'window';
	element.innerHTML = `<p></p>`;
	element.style.left = '100 px';
	element.style.top = '100 px';
	
	element.style.zIndex = zIndex;
	element.isMaximized = false;

	applyDrag(element);
	applyToggleManagement(element);

	desktop.appendChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(CustomEase);
	CustomEase.create("smoothed", "0.25, 1, 0.5, 1");		// cubic-bezier(0.25, 1, 0.5, 1)
});