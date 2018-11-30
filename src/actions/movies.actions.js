import * as movieService from '../services/movie.service';



const setGenres = (genres) => ({
	type: 'SET_GENRES',
	genres
});

const setMovies = (movies) => ({
	type: 'SET_MOVIES',
	movies
});


export const getGenres = () => {
	return async (dispatch) => {
		try {
			console.log('FETCHING GENRES')
			const genres = await movieService.getGenres();
			const genreObjects = genres.map((el, i) => { return { key: el  } });

			dispatch(setGenres(genreObjects));
		}catch(e){
			console.log('GET_GENRES', e);
		}
	}
}


export const getMovies = () => {
	return async (dispatch) => {
		try {
			const movies = movieService.getMovies();
			dispatch(setMovies(movies));
		}catch(e){
			console.log('GET_MOVIES', e);
		}
	}
}