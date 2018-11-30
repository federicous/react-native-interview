
//Requests can obviously become more complex


const fetchGenres = () => fetch('http://localhost:3000/genres').then(res => res.json())

const fetchMovies = () => fetch('http://localhost:3000/movies').then(res => res.json())


export {
	fetchGenres,
	fetchMovies
};