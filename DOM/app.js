const cards = document.getElementById('card-dinamicas');
const templateCard = document.getElementById('template-card').content;

document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async () => {
	try {
		loadingData(true);
		const respuesta = await fetch('https://rickandmortyapi.com/api/character');
		const data = await respuesta.json();
		mostrarCard(data);
	} catch (error) {
		console.log(error);
	} finally {
		loadingData(false);
	}
};

const mostrarCard = (data) => {
	const fragment = document.createDocumentFragment();
	data.results.forEach((item) => {
		const clone = templateCard.cloneNode(true);
		clone.querySelector('h5').textContent = item.name;
		clone.querySelector('img').src = item.image;
		clone.querySelector('p').textContent = item.species;
		fragment.appendChild(clone);
	});
	cards.appendChild(fragment);
};

const loadingData = (estado) => {
	const loading = document.getElementById('loading');
	if (estado) {
		loading.classList.remove('d-none');
	} else {
		loading.classList.add('d-none');
	}
};
