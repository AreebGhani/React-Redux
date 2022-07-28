import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension"

const Store = createStore(rootReducer, composeWithDevTools());

export default Store;
