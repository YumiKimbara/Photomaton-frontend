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
    case "STORE_NEW_POST":
      return {
        ...state,
        newPost: action.newPost,
      };
    default:
      return state;
  }
};

export default reducer;
