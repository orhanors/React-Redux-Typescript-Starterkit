import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApiCallType } from "./api";

export interface IState {
	data: object[];
	errorMessage: string;
	loading: boolean;
}

const initialState: IState = {
	data: [],
	errorMessage: "",
	loading: false,
};

const slice = createSlice({
	name: "test",
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
		}),
		success: (state, action: PayloadAction<object[]>) => ({
			...state,
			loading: false,
			data: action.payload,
		}),
		failed: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			errorMessage: action.payload,
		}),
	},
});

export const { requested, success, failed } = slice.actions;

export default slice.reducer;

export const testCallBody: ApiCallType = {
	url: "https://jsonplaceholder.typicode.com/users",
	//headers: {},
	onStart: requested.type,
	onSuccess: success.type,
	onError: failed.type,
};
