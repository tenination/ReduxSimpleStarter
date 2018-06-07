// state argument is not application state, only the state 
//always return a fresh object. Never modify state and return that. Bad practice!!
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED': 
    return action.payload;
  }

  return state;
}