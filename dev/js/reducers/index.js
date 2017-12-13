import {combineReducers} from 'redux';
import BookReducer from './reducer-books';
import ActiveBookReducer from './reducer-active-book';


const allReducers = combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer
});

export default allReducers
