export default function quotes(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      return state.map((quote) => quote.id === action.quoteId ? { ...quote, votes: quote.votes + 1 } : quote);

    case 'DOWNVOTE_QUOTE':
      return state.map((quote) => quote.id === action.quoteId ? { ...quote, votes: quote.votes > 0 ? quote.votes - 1 : quote.votes } : quote);

    default:
      return state;
  }

}
