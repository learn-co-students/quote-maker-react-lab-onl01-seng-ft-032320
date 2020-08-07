// TODO: Create action creators as defined in tests
// Function that returns an object; action object creator function
export const addQuote = quote => {
  return {
    type: "ADD_QUOTE",
    quote
  }
}

export const removeQuote = quoteId => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  }
}