
//Requests can obviously become more complex


const getGenres = () => fetch('http://localhost:3000/genres').then(res => res.json())

const getMovies = () => fetch('http://localhost:3000/movies').then(res => res.json()).catch(err)


export {
	getGenres,
	getMovies
};