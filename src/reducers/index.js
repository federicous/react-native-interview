import { combineReducers } from 'redux';
import movies from './movies.reducer';

const getRootReducer = (navReducer) => {

	return combineReducers({
		movies,
		nav: navReducer
	});
};

export default getRootReducer;