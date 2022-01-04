/*Primera Parte - Declaración*/
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('templateFooter');

/*Segunda Parte -Funciones*/
document.addEventListener('click', (e) => {
	if (e.target.matches('.card .btn-outline-primary')) {
		agregarAlCarrito(e);
	}
	if (e.target.matches('div .btn-success')) {
		aumentarProducto(e);
	}
	if (e.target.matches('div .btn-danger')) {
		disminuirProducto(e);
	}
});
let carritoObjeto = [];
const agregarAlCarrito = (e) => {
	const producto = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		cantidad: 1,
		precio: parseInt(e.target.dataset.precio),
	};
	const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
	if (indice === -1) {
		carritoObjeto.push(producto);
	} else {
		carritoObjeto[indice].cantidad++;
		carritoObjeto[indice].precio =
			carritoObjeto[indice].cantidad * producto.precio;
	}
	console.log(carritoObjeto);
	mostrarCarrito(carritoObjeto);
};
const mostrarCarrito = () => {
	carrito.textContent = '';
	carritoObjeto.forEach((item) => {
		const clone = template.content.cloneNode(true);
		clone.querySelector('.lead').textContent = item.titulo;
		clone.querySelector('.badge').textContent = item.cantidad;
		clone.querySelector('div .lead span').textContent =
			item.precio * item.cantidad;
		clone.querySelector('.btn-danger').dataset.id = item.id;
		clone.querySelector('.btn-success').dataset.id = item.id;

		fragment.appendChild(clone);
	});
	carrito.appendChild(fragment);
	mostrarFooter();
};
const mostrarFooter = () => {
	console.log('Mostrar footer');
	footer.textContent = '';
	const total = carritoObjeto.reduce(
		(acc, current) => acc + current.cantidad * current.precio,
		0
	);
	if (total > 0) {
		const clone = templateFooter.content.cloneNode(true);
		clone.querySelector('.lead span').textContent = total;
		footer.appendChild(clone);
	}
};

const aumentarProducto = (e) => {
	carritoObjeto = carritoObjeto.map((item) => {
		if (item.id === e.target.dataset.id) {
			item.cantidad++;
		}
		return item;
	});
	mostrarCarrito();
};
const disminuirProducto = (e) => {
	carritoObjeto = carritoObjeto.filter((item) => {
		if (item.id === e.target.dataset.id) {
			if (item.cantidad > 0) {
				item.cantidad--;
				if (item.cantidad === 0) return;
				return item;
			}
		} else {
			return item;
		}
	});
	mostrarCarrito();
};
