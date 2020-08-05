import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm'
import Quotes from './containers/Quotes'
import { connect } from 'react-redux';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from './actions/quotes';



class App extends Component {
  
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm addQuote={this.props.addQuote}/>    
        <Quotes quotes={this.props.quotes} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>   
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {addQuote: (quote) => dispatch(addQuote(quote)),
  removeQuote: (id) => dispatch(removeQuote(id)),
  upvoteQuote: (id) => dispatch(upvoteQuote(id)),
  downvoteQuote: (id) => dispatch(downvoteQuote(id))}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
