const url = ' https://pokeapi.co/api/v2/pokemon/ditto';

const findPostById = async (id) => {
	try {
		const res = await fetch(url);
		const pokemon = await res.json();
		console.log(pokemon);
	} catch (error) {
		console.log(error);
	}
};
findPostById();
//Utilizamos el fetch normal
// fetch(url)
// 	.then((respuesta) => respuesta.json())
// 	.then((data) => console.log(data))
// 	.catch((e) => console.log(e));
