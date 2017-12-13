import React from 'react';
import BookDetails from '../containers/book-detail';
import BookList from '../containers/book-list';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Book List</h2>
        <BookList />
        <h2>Book Details</h2>
        <BookDetails />
    </div>
);

export default App;
