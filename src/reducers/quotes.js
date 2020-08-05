export default (state = [], action) => {
  let idx
  switch(action.type) {
    case 'ADD_QUOTE':
      console.log('quote received')
      return [...state, {id: action.quote.id, content: action.quote.content, author: action.quote.author, votes: action.quote.votes}]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      // debugger
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
        return [...state.slice(0, idx),{...state[idx], votes: state[idx].votes + 1}, ...state.slice(idx + 1)]
      // return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes + 1 } : quote)
      // idx = state.findIndex(quote => quote.id === action.quoteId)
      // return [...state.slice(0, idx),{...state[idx], votes: state[idx].votes + 1}, ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if (state[idx].votes > 0) {
        return [...state.slice(0, idx),{...state[idx], votes: state[idx].votes - 1}, ...state.slice(idx + 1)]
      }
      else {
        return state
      }
    default: 
      return state        
  }
}
