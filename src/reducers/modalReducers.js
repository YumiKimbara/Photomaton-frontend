const initialModalState = {
  modal: false,
  newPost: [],
};

const reducer = (state = initialModalState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default reducer;
