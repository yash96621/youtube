const reducer = (state = 0, action) => {
  if (action.type === "sideopen") {
    return state + action.payload;
  } else if (action.type === "sideclose") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
