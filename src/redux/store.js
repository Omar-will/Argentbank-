import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/config";
import thunk from "redux-thunk";

let devToolsValue = true;
if (/Firefox/.test(navigator.userAgent)) {
    devToolsValue = process.env.NODE_ENV !== "production";
}

if (/Chrome/.test(navigator.userAgent)) {
    devToolsValue = true;
}

const store = configureStore({
    reducer: rootReducer,
    devTools: devToolsValue,
    middleware: [thunk],
});

export default store;
