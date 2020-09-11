 function quotes(
   state = [], action){
 
    let idx;
    let quote;
    switch (action.type) {
        case 'ADD_QUOTE':
            return state.concat(action.quote);
            
        case 'REMOVE_QUOTE':
            idx = state.findIndex(quote => quote.id  === action.quoteId)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
      
        case 'UPVOTE_QUOTE':
          quote = state.find(quote => quote.id === action.quoteId)
          idx = state.findIndex(quote => quote.id  === action.quoteId)
          quote.votes = quote.votes + 1
          return [...state.slice(idx, 1, quote)];
         

        case 'DOWNVOTE_QUOTE':
          quote = state.find(quote => quote.id === action.quoteId)
          idx = state.findIndex(quote => quote.id  === action.quoteId)
          quote.votes > 0 ? quote.votes = quote.votes - 1 : quote.votes = 0
          return [...state.slice(idx, 1, quote)];
        
        default:
      return state;
    }
}

export default quotes