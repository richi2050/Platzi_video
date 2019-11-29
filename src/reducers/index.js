const reducer = ( state, action ) => {
  console.log(action.payload);
  console.log(action.type);
  switch(action.type){
    case 'SET_FAVORITES':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    default:
        return state;      
  }
}

export default reducer;