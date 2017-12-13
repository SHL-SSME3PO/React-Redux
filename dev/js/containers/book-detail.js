import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return (<div>Please select a book above for details.</div>);
        }
        return (
            <div className="bookList">
                <b>Book Name:</b> <h3> {this.props.book.name}</h3>
                <b>Author: </b><h3>{this.props.book.first} {this.props.book.last}</h3>
                <b>Description: </b><h3>{this.props.book.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
