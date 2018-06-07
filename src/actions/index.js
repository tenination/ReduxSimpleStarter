export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action
	// an object. Currently it is just a console.log statement and not an action object
	return { 
		type: 'BOOK_SELECTED', 
		payload: book
	};
}   