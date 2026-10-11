// import '/css/styles.css';

const desktop = document.getElementById('desktop');
const btnAdd = document.getElementById('btn-add');

btnAdd.onclick = () => {
	let element = document.createElement('div');
	element.className = 'box';
	element.innerHTML = `<p>${zIndex}</p>`;

	element.ultiX = 0;		// normal_bounds X
	element.ultiY = 0;		// normal_bounds Y
	element.style.zIndex = zIndex;
	element.isMaximized = false;

	applyDrag(element);
	applyToggleManagement(element);

	desktop.appendChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(CustomEase);
	CustomEase.create("smoothed", ".4, 0, .2, 1");		// cubic-bezier(0.25, 1, 0.5, 1)
});

/*--ds-ease-in-out: cubic-bezier(.4, 0, .2, 1);
--ds-ease-in: cubic-bezier(.4, 0, 1, 1);
--ds-ease-out: cubic-bezier(0, 0, .2, 1);*/