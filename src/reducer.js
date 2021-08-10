export const initialState = {
   weatherInfo:""
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_WEATHER":
          
        return { ...state, weatherInfo: action.weather};
      
      
      default:
        return state;
    }
  }
  export default reducer;