const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const alertName = document.getElementById('alertName');
console.log(alertName);
const alertEmail = document.getElementById('alertEmail');
console.log(alertEmail);

const alertSucces = document.getElementById('alertSucces');

const mostrarAlertaSuccess = () => {
	alertSucces.classList.remove('d-none');
	alertSucces.textContent = 'Mensaje Enviado Satisfactoriamente';
};

const mostrarAlertaError = (errores) => {
	errores.forEach((item) => {
		item.tipo.classList.remove('d-none');
		item.tipo.textContent = item.msg;
	});
};

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const regUserEmail =
		/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
	const errores = [];
	if (!regUserName.test(userName.value) || !userName.value.trim()) {
		errores.push({
			tipo: alertName,
			msg: 'Formato no válido en el campo nombre, solo letras',
		});
		userName.classList.add('is-invalid');
	} else {
		userName.classList.remove('is-invalid');
		userName.classList.add('is-valid');
		alertName.classList.add('d-none');
	}
	if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
		errores.push({
			tipo: alertEmail,
			msg: 'Escriba un email válido',
		});
		userEmail.classList.add('is-invalid');
	} else {
		userEmail.classList.remove('is-invalid');
		userEmail.classList.add('is-valid');
		alertEmail.classList.add('d-none');
	}
	if (errores.length !== 0) {
		mostrarAlertaError(errores);
		return;
	}
	mostrarAlertaSuccess();
	setTimeout(() => {
		alertSucces.classList.add('d-none');
	}, 3000);
});
