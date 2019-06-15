const initState = {
    placeholder:"value",
    arr: []
    //Important: always create the array in the initial state object first if you plan to use .map on it
  };
  
  const Reducer = (state = initState, action) => {
    switch (action.type) {
      case "FIRST_ACTION":
          //this code is usually used for changing inputs
        let newStateInputOne = Object.assign({}, state, {
          [action.data.name]: action.data.value
        });
  
        return newStateInputOne;
  
      case "SECOND_ACTION":
          //this code is simply changing a key inside redux store with new data
        let newStateInputTwo = Object.assign({}, state, {
          arr: action.data
        });
  
        return newStateInputTwo;
  
      case "THIRD_ACTION":
        let newStateInputThree = Object.assign({}, state, {
            arr: action.data
        });
  
        return newStateInputThree;
  
      default:
        return state;
    }
  };
  
  export default Reducer;
  