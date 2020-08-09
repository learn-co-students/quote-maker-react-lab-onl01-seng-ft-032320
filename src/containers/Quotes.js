import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  render() {
    const list = this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote}removeQuote={this.props.removeQuote}/>)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              
              {list}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}


export default connect(mapStateToProps,{ removeQuote, upvoteQuote, downvoteQuote })(Quotes);
