export const pluse = (number) => {
  return (dispatch) => {
    dispatch({
      type: "pluse",
      payload: number,
    });
  };
};

export const minus = (number) => {
  return (dispatch) => {
    dispatch({
      type: "minus",
      payload: number,
    });
  };
};
