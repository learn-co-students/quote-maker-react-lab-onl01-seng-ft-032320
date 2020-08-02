import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  //render individual QuoteCard components
  //needs to be connected to redux state so it can render quotes
  //attach remove, upvote,downvote action from quote actions file to pass down as callback props to QuoteCard

  removeQuote = (quoteID) => {
    this.props.removeQuote(quoteID)  
  }

  upvoteQuote = (quoteID) => {
    this.props.upvoteQuote(quoteID)  
  }

  downvoteQuote = (quoteID) => {
    this.props.downvoteQuote(quoteID)  
  }

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
              {this.props.quotes.map(quote => 
       <QuoteCard 
                key={quote.id}
                removeQuote={this.removeQuote}
                upvoteQuote={this.upvoteQuote}
                downvoteQuote={this.downvoteQuote}
                quote={quote}/> 
          )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteID) => dispatch(removeQuote(quoteID)),
    upvoteQuote: (quoteID) => dispatch(upvoteQuote(quoteID)),
    downvoteQuote: (quoteID) => dispatch(downvoteQuote(quoteID))
  }
}


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
