import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.id} onClick={() => this.props.selectBook(book)}>
                    <a href="#">{book.name}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

function StateToPropsMapping(state) {
    return {
        books: state.books
    };
}

function DispatchToPropsMatching(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(StateToPropsMapping, DispatchToPropsMatching)(BookList);
