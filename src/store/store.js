import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import modalReducer from "../reducers/reducers.js"
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducers.js";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    modalReducer: modalReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;


