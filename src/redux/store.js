import userReducer from "../Page/Site/Page/Account/userSlice"
import { configureStore } from "@reduxjs/toolkit";
const rootReducers = {
    user: userReducer, 
}

const store = configureStore({
    reducer : rootReducers
})
export default store
// import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
// import rootReducers from "./reducers";

// const middleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// }

// export const store = createStore(
//     rootReducers,
//     applyMiddleware(...middleware)
// )
