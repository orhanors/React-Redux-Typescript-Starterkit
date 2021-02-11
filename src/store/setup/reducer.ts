import { combineReducers } from "@reduxjs/toolkit";
import undoReducer from "../undo";
import testReducer from "../test";

const rootReducer = combineReducers({
	test: testReducer,
	undo: undoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
