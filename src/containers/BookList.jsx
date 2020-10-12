import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { bookList } = this.props;

    const renderBooks = () => {
      bookList.map(book => {
        return (
          <tr key={book.id}>
            <Book book={book} />>
          </tr>
        )
      });
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {renderBooks}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => (
  {
    bookList: state,
  }
);

const connectedBookList = connect(mapStateToProps)(BookList);

export default connectedBookList;
