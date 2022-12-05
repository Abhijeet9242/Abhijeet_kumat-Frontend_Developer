import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { capsuleReducer, selectedCapsuleReducer } from "./reducer";

const rootReducer = combineReducers({
  capsule: capsuleReducer,
  selectedCapsules: selectedCapsuleReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
