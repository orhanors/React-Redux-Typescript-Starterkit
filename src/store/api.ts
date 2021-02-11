import { createAction } from "@reduxjs/toolkit";

export interface ApiCallType {
	url: string;
	headers?: any;
	method?: string;
	onStart: any;
	onSuccess: any;
	onError: any;
	data?: any;
}

export const apiCall = createAction<ApiCallType>("api/call");
console.log("apicall:::", apiCall);
export const apiCallSuccess = createAction<object>("api/callSuccess");
export const apiCallFailed = createAction<object>("api/callFailed");
