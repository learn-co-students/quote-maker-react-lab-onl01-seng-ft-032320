import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  quotes = () => this.props.quotes.map((quote, id) => <QuoteCard key={id} quote={quote} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote} />)


  render() {

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
              {this.quotes()}
              {/* <QuoteCard upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} /> */}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
