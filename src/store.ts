import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./components/LoginPage/loginPageSlice";
import QuotesTabReducer from "./components/Quotes/quotesTabSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    quotes: QuotesTabReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
