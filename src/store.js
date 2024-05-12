//============================================ redux toolkit ===============================================//
import customerReducer from "./features/customer/customerSlice";
//===DEFAULT IMPORT CAN BE RENAMED===//
import accountReducer from "./features/account/accountSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { account: accountReducer, customer: customerReducer } })

export default store;










//============================================ redux old syntax ===========================================//
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import customerReducer from "./features/customer/customerSlice";
// import accountReducer from "./features/account/accountSlice";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";


// const rootReducer = combineReducers({
//     account: accountReducer,
//     customer: customerReducer
// })
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;



