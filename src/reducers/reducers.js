const initialModalState = {
  modal: false
}

const modalReducer = (state = initialModalState, action) => {
  switch(action.type) {
      case "TOGGLE_MODAL":
      return {
          ...state,
          modal: !state.modal,
      }
      default: 
      return state;
  }
}

export default modalReducer;