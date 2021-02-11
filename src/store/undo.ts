import { createSlice } from "@reduxjs/toolkit";

type UndoState = boolean;

const initialState: UndoState = false;

const slice = createSlice({
	name: "undo",
	initialState,
	reducers: {
		setUndo: () => true,
		unsetUndo: () => false,
	},
});

export const { setUndo, unsetUndo } = slice.actions;

export default slice.reducer;
