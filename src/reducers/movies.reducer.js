
const initialState = {
	genres: [],
}

const movies = (state = initialState, action) => {
	switch(action.type){
		case 'SET_GENRES':
			return {
				...state,
				genres: action.genres
			};
		case 'SET_MOVIES':
			return {
				...state,
				movies: action.movies
			}
		default:
			return state;
	}
};


export default movies;