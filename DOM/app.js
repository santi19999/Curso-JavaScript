/**
 * Primero obtenemos el ul(id=carrito) en cual mostraremos cada elemento que agreguemos al carrito
 * Luego obtenemos el template donde está la lista la cual agregaremos y modificaremos según sea el elemento que se quiera agregar
 * Creamos el Fragment son Nodos del DOM que nunca forman parte del arbol DOM.
 * Obtenemos todos los botones
 */
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

/**
 * Crreamos el carrito, el cual es un objeto literal
 */
const carritoObjeto = [];
/**
 * Creamos la función para poder agregar los productos al carrito.
 * Esta recibe como parámetro el evento de cada botón que se clickea.
 * Se crea un objeto con los datos de ese producto seleccionado.
 * Evalúa si existe el producto dentro del carrito, si existe, aumenta la cantidad de unidades y vuelve a mostrar el producto actualizado.
 * Si este no existe, agrega el producto al carrito, luego lo muestra por pantalla.
 */
const agregarAlCarrito = (e) => {
	const producto = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		cantidad: 1,
	};
	const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
	if (indice === -1) {
		carritoObjeto.push(producto);
	} else {
		carritoObjeto[indice].cantidad++;
	}
	mostrarCarrito(carritoObjeto);
};

/**
 * Esta función es la encargada de recorrer el carrito, clonar el template
 * acceder a los elementos que se modificarán para mostrar el producto
 * modifica y agrega el nombre del producto y la cantidad
 * agrega el clon del template al fragment creado paralelo al DOM
 * luego agrega al ul del DOM La lista modificada del template con el producto que se agrega al carrito
 */
const mostrarCarrito = (array) => {
	carrito.textContent = '';
	array.forEach((item) => {
		const clone = template.content.firstElementChild.cloneNode(true);
		clone.querySelector('.lead').textContent = item.titulo;
		clone.querySelector('.badge').textContent = item.cantidad;
		fragment.appendChild(clone);
	});
	carrito.appendChild(fragment);
};
//Agregamos el evento de clock a cada botón y se dispara la función de agregarAlCarrito
btnesBotones.forEach((btn) => btn.addEventListener('click', agregarAlCarrito));
