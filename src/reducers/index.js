import { combineReducers } from 'redux';
import BooksReducer from './reducers_books.js';
import ActiveBookReducer from './reducers_active_book.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer; 
