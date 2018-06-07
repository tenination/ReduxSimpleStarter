import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
      	<li 
      	  key={book.title} 
      	  onClick={() => this.props.selectBook(book)}> 
      	  {book.title}
      	</li>
      ) 
    })
  }
  
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned whill show up as props
  // inside of BookList 
  return {
    books: state.books
  };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
// whenever selectbook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote Booklist from a component to a container - it needs to know about this new dispathc method, selectBook. Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);    
