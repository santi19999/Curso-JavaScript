const posts = [
	{
		userId: 1,
		id: 1,
		title:
			'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
		body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
	},
	{
		userId: 1,
		id: 2,
		title: 'qui est esse',
		body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
	},
	{
		userId: 1,
		id: 3,
		title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
		body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
	},
];

const findPostById = (id) => {
	const post = posts.find((item) => item.id === id); //buscamos el post y lo almacenamos
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (post) {
				// si el post existe
				resolve(post.title, post.body); //retorno el post
			} else {
				reject('No se encontró el id ' + id); //caso contrario , retorno el nombre del error
			}
		}, 2000); //esta funcion retorna una promesa
	});
};

// findPostById(4) // invocamos a la funcion
// 	.then((post) => console.log(post)) //El then es para la respuesta positiva
// 	.catch((err) => console.log(err)); //El catch es para la respuesta negativa

const buscar = async (id) => {
	try {
		const post = await findPostById(id);
		console.log(post);
	} catch (error) {
		console.log(error);
	} finally {
		console.log('Finalizo el programa');
	}
};
buscar(3);

//CALLBACK
// const findPostById = (id, callback) => {
// 	const post = posts.find((item) => item.id === id);
// 	if (post) {
// 		callback(null, post);
// 	} else {
// 		callback('No se encontró el post ' + id);
// 	}
// };

// findPostById(6, (err, post) => {
// 	if (err) {
// 		return console.log(err);
// 	}
// 	console.log(post);
// });
