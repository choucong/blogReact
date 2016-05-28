var mdContent = function(state = {}, action) {
  switch (action.type) {
    case 'PUSH_CHANGE':
      return {
        mdContent: action.content
      };
    default:
      return state;
  }
}

export default mdContent
